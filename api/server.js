const express = require('express');
const app = express();
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const patientRoute = require('./patientRoute');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use(express.json())
app.use('/patient', patientRoute);

app.listen(PORT, () => {
  console.log('Server is running on Port:',PORT);
});