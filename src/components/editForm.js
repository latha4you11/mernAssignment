import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import validateInput from '../formValidator'

class EditForm extends Component {
  state = {
    patientName: '',
    age: '',
    place: '',
    errors:{}
  }

  componentDidMount() {
    axios
      .get('http://localhost:4000/patient/edit/' + this.props.match.params.id)
      .then((response) => {
        this.setState({
          patientName: response.data.patientName,
          age: response.data.age,
          place: response.data.place,
        })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  handleOnChange = (e) => {
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
      axios
        .post(
          `http://localhost:4000/patient/update/${this.props.match.params.id}`,
          obj
        )
        .then((res) => {console.log(res.data)
        this.props.history.push('/')})
    }
  }

  onReset = (e) => {
    e.preventDefault()
    this.setState({
      patientName: '',
      age: '',
      place: '',
    })
  }

  render() {
    const { errors } = this.state
    return (
      <div style={{ marginTop: 10 }}>
        <Link to={'/'} className="btn btn-primary float-left">
          Home
        </Link>
        <h4 align="center">Update Patient Information</h4>
        <form onSubmit={this.onSubmit} onReset={this.onReset}>
          <div className="form-group">
            <label>Patient Name: </label>
            <input
              type="text"
              name="patientName"
              className="form-control"
              value={this.state.patientName}
              onChange={this.handleOnChange}
            />            
            {errors && <div className="alert-danger">{errors.patientName}</div>}
          </div>
          <div className="form-group">
            <label>Patient Age: </label>
            <input
              type="text"
              name="age"
              className="form-control"
              value={this.state.age}
              onChange={this.handleOnChange}
            />
            {errors && <div className="alert-danger">{errors.age}</div>}
          </div>
          <div className="form-group">
            <label>Patient Place:</label>
            <input
              type="text"
              name="place"
              className="form-control"
              value={this.state.place}
              onChange={this.handleOnChange}
            />
            {errors && <div className="alert-danger">{errors.place}</div>}
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Update Patient Details"
              className="btn btn-primary"
            />
            <input
              type="reset"
              value="Reset"
              style={{ margin: 10 }}
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    )
  }
}

export default EditForm
