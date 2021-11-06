// routes differentes
const express = require('express');
const router = express.Router();
const enlaces = require('../controller/routes.js');

router.get('/', enlaces.getHomepage);



module.exports = router;