const Donor = require('../database/models/Donor');

const getAllDonors = async (req, res) => {
  const donors = await Donor.find();

  res.send(donors);
};

const createDonor = async (req, res) => {
  const donor = req.body;
  const createDonor = await Donor.create(donor);

  res.send(createDonor);
};

module.exports = {getAllDonors, createDonor};
