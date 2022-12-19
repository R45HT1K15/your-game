const express = require('express');

const router = express.Router();

const { postLogin } = require('../controllers/loginController');

router.post('/', postLogin)

module.exports = router;