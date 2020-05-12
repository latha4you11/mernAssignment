const express = require('express');
const patientRoutes = express.Router();

let Patient = require('./patientModel');

patientRoutes.route('/add').post(function (req, res) {
  let patient = new Patient(req.body);
  patient.save(patient)
    .then(patient => {
      res.send(patient);
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

patientRoutes.route('/').get(function (req, res) {
  Patient.find(function(err, patients){
    if(err){
      console.log(err);
    }
    else {
      res.json(patients);
    }
  });
});

patientRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Patient.findById(id, function (err, patient){
      res.json(patient);
  });
});

patientRoutes.route('/update/:id').post(function (req, res) {
  Patient.findById(req.params.id, function(err, patient) {
    if (!patient)
      res.status(404).send("data is not found");
    else {
      patient.patientName = req.body.patientName;
      patient.age = req.body.age;
      patient.place = req.body.place;

      patient.save().then(patient => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

module.exports = patientRoutes;