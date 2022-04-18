const express = require('express');
const mongoose = require('mongoose');
const app = express();
const {donorRouter, patientRouter, bankRouter} = require('./routes');

app.use(express.json());

app.use(donorRouter);
app.use(patientRouter);
app.use(bankRouter);
// MongoDB connection
mongoose.connect('mongodb://localhost:27017/blood_bank', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
