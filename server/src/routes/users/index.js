const express = require('express');

const router = express.Router();

router.get('/me', require('./me'));
router.post('/', require('./createUser'));

module.exports = router;
