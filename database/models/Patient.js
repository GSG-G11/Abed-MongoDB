const {Schema, model} = require('mongoose');

const patientSchema = new Schema({
  name: {type: 'string', required: true},
  blood_group: {type: 'string', required: true},
});

const Patient = model('Patient', patientSchema);

module.exports = Patient;
