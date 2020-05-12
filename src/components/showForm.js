import React, { Component } from 'react'
import axios from 'axios'
import TableRow from './tableRow'
import {Link} from 'react-router-dom'

class ShowForm extends Component {
  state = { patient: [] }

  componentDidMount() {
    axios
      .get('http://localhost:4000/patient')
      .then((response) => {
        this.setState({ patient: response.data })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render() {
    return (
      <div>
         <Link to={'/create'} className="btn btn-primary float-right">Add New</Link>
        <h4 align="center">Patients List</h4>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Patient</th>
              <th>Age</th>
              <th>Place</th>
            </tr>
          </thead>
          <tbody>
            {this.state.patient.map(function (object, i) {
              return <TableRow obj={object} key={i} />
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ShowForm
