const express = require('express');

const router = express.Router();

const { renderSignUp, postSignUp } = require('../controllers/signUpController');

router.get('/', renderSignUp);
router.post('/', postSignUp);

module.exports = router;