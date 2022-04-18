const {getAllDonors, createDonor} = require('./donorController');
const {getAllPatients, createPatient} = require('./patientController');
const {getBanks, createBank, getBankDonors} = require('./bankController');
module.exports = {
  getAllDonors,
  createDonor,
  getAllPatients,
  createPatient,
  getBanks,
  createBank,
  getBankDonors,
};
