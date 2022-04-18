const {getAllPatients, createPatient} = require('../controllers');
const router = require('express').Router();

router.get('/patients', getAllPatients);

router.post('/patients', createPatient);

module.exports = router;
