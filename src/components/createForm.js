import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import validateInput from '../formValidator'

class CreateForm extends Component {
  state = {
    patientName: '',
    age: '',
    place: '',
    errors: {},
  }
  onHandleChange = (e) => {
    if (Object.keys(this.state.errors).length) {
      this.setState({
        errors: {},
      })
    }
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const obj = {
      patientName: this.state.patientName,
      age: this.state.age,
      place: this.state.place,
    }

    const { isValid, errors } = validateInput(obj)
    if (errors) {
      this.setState({
        errors,
      })
    }
    if (isValid) {
      axios.post('http://localhost:4000/patient/add', obj).then((res) => {
        console.log(res.data)
        this.setState({
          patientName: '',
          age: '',
          place: '',
        })
      })
    }
  }

  render() {
    const { errors } = this.state
    return (
      <div style={{ marginTop: 10 }}>
        <Link to={'/'} className="btn btn-primary float-left">
          Home
        </Link>
        <h4>Add New Patient Details</h4>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Patient Name: </label>
            <input
              type="text"
              name="patientName"
              className="form-control"
              value={this.state.patientName}
              onChange={this.onHandleChange}
            />
            {errors && <div className="alert-danger">{errors.patientName}</div>}
          </div>
          <div className="form-group">
            <label>Patient Age: </label>
            <input
              type="number"
              name="age"
              className="form-control"
              value={this.state.age}
              onChange={this.onHandleChange}
            />
            {errors && <div className="alert-danger">{errors.age}</div>}
          </div>
          <div className="form-group">
            <label>Patient place: </label>
            <input
              type="text"
              name="place"
              className="form-control"
              value={this.state.place}
              onChange={this.onHandleChange}
            />
            {errors && <div className="alert-danger">{errors.place}</div>}
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Submit Details"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    )
  }
}

export default CreateForm
