const express = require('express');

const router = express.Router();

const { postSignUp } = require('../controllers/signUpController');

router.post('/', postSignUp);

module.exports = router;