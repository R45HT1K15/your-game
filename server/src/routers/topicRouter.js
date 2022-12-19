const express = require('express');

const router = express.Router();

const { renderTopic, updateStat } = require('../controllers/topicsController');
const { isUser } = require('../middlewares/common');
const { route } = require('./mainRouter');

router.get('/:name', isUser, renderTopic);
router.post('/:name', isUser, updateStat)

module.exports = router;