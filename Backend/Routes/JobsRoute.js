const express = require('express');
const { getJobs } = require('../Controllers/Jobs');
const router = express.Router()

router.route('/jobs').get(getJobs);

module.exports = router