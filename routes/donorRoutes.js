const {getAllDonors, createDonor} = require('../controllers');
const router = require('express').Router();
router.get('/donors', getAllDonors);

router.post('/donors', createDonor);

module.exports = router;
