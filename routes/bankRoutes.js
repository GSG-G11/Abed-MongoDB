const router = require('express').Router();
const {getBanks, createBank, getBankDonors} = require('../controllers');

router.get('/banks', getBanks);
router.post('/banks', createBank);
router.get('/banks/donors/:id', getBankDonors);

module.exports = router;
