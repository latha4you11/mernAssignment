const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Patient = new Schema({
  patientName: {
    id: 1,
    type: String,
    required: true
  },
  age: {
    id: 2,
    type: Number,
    required: true
  },
  place: {
    id: 3,
    type: String,
    required: true
  }
},{
    collection: 'patient'
});

module.exports = mongoose.model('Patient', Patient);