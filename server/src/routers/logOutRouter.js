const express = require('express');

const router = express.Router();

const { logoutRend } = require('../controllers/loginController');

router.delete('/', logoutRend);

module.exports = router;