const express = require('express');

const router = express.Router();

const { renderMain } = require('../controllers/mainController');

router.get('/', renderMain);


module.exports = router;