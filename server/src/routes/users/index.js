const express = require('express');

const router = express.Router();

router.post('/', require('./createUser'));

module.exports = router;
