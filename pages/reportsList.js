import Head from 'next/head'
import Reports from './reports';
import 'isomorphic-fetch'
import Loader from './Loader';


class ReportList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: false
        }
    }
    componentDidMount() {
        fetch(`${window.location.href}api/reports`)
        .then(response => response.json())
        .then((response) => {
          try {
            const data = JSON.parse(response)
            console.log(data)
            this.setState({
                list: data,
            })
          } catch(err) {
            this.setState({
                list: false,
            })
          }
        });
    }

   render () {
    return (
        <div className="container">
          {
              !this.state.list && (
                  <Loader></Loader>
              )
          }
          {
              this.state.list && (
                <Reports challenges={this.state.list}/>
              )
          }
        </div>
     )
   }

}

export default ReportList
