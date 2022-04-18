const Patient = require('../database/models/Patient');

const getAllPatients = async (req, res) => {
  const patients = await Patient.find();

  res.send(patients);
};

const createPatient = async (req, res) => {
  const patient = req.body;
  console.log(patient);
  const createPatient = await Patient.create(patient);

  res.send(createPatient);
};

module.exports = {getAllPatients, createPatient};
