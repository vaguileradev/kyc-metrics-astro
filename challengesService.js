const request = require('request');


const getReport = (reportId, type) => new Promise((resolve, reject) => {
    request(`https://rester-app-hosting.firebaseapp.com/${reportId}/${type === 'sunburst' ? 'sunburst.json' : `${type}.csv`}`, (error, response, body) => {
        let payload
        if (type === 'sunburst') {
            payload = {
                ...response,
                data: body,
            };
            return resolve(payload)
        }
        const lines = body.split('\n');
        payload = {
            ...response,
            data: lines.map(line => line.split(',')),
        };
        return resolve(payload)
    })
})

const getReports = (reportId, type) => new Promise((resolve, reject) => {
    request(`https://rester-app-hosting.firebaseapp.com/challenges.json`, (error, response, body) => {
        return resolve(response)
    })
})

module.exports = {
    getReport,
    getReports,
}
