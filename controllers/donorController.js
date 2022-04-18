const Donor = require('../database/models/Donor');
const Bank = require('../database/models/Bank');

const getAllDonors = async (req, res) => {
  const donors = await Donor.find();

  res.send(donors);
};

const createDonor = async (req, res) => {
  const bank = await Bank.findOne({bank: req.body.bank});
  console.log(bank);
  const {name, blood_group, contact} = req.body;
  const donor = await Donor.create({
    name,
    blood_group,
    contact,
    bank: bank._id,
  });

  bank.donors.push(donor._id);
  await bank.save();

  res.send(donor);
};

module.exports = {getAllDonors, createDonor};
