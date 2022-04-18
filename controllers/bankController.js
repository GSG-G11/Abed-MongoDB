const Bank = require('../database/models/Bank');

const getBanks = async (req, res) => {
  const banks = await Bank.find().populate('donors');
  res.send(banks);
};

const createBank = async (req, res) => {
  const bank = req.body;
  const createBank = await Bank.create(bank);

  res.send(createBank);
};

const getBankDonors = async (req, res) => {
  const bankId = req.params.id;
  console.log(bankId);
  const bank = await Bank.findById(bankId).populate('donors');

  res.send(bank.donors);
};

module.exports = {getBanks, createBank, getBankDonors};
