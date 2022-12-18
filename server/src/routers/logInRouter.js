const express = require('express');

const router = express.Router();

const { renderLogin, postLogin } = require('../controllers/loginController');

router.get('/', renderLogin);
router.post('/', postLogin)

module.exports = router;