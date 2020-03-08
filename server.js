const express = require('express')
const next = require('next')
var bodyParser = require('body-parser')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const challengesService = require('./challengesService')

app.prepare().then(() => {
  const server = express()


  server.get('/api/posts', (req, res) => {
    res.send({ data: 'response' })
  })

  server.get('/api/reports', async (req, res) => {
    try {
      const response = await challengesService.getReports();
      res.json(response.body);
    } catch (e) {
      res.status(e.response ? e.response.status : 500).json(e.response ? e.response.data : { message: e.message });
    }
  })
  
  server.get('/api/report/:reportId/:type', async (req, res) => {
    try {
      const response = await challengesService.getReport(req.params.reportId, req.params.type);
      res.json(response.data);
    } catch (e) {
      res.status(e.response ? e.response.status : 500).json(e.response ? e.response.data : { message: e.message });
    }
  });

  server.get('')

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})