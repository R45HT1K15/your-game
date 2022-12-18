const express = require('express');

const router = express.Router();

const { logoutRend } = require('../controllers/loginController');

router.get('/', logoutRend);

module.exports = router;