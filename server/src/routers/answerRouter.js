const router = require('express').Router()

const { answerCheck } = require('../controllers/answerController')

router.post('/', answerCheck);

module.exports = router;