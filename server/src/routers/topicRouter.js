const express = require('express');

const router = express.Router();

const { renderTopic } = require('../controllers/topicsController');
const { isUser } = require('../middlewares/common');

router.get('/:id', isUser, renderTopic);

module.exports = router;