const router = require('express').Router()

const { answerCheck, scoreCheck } = require('../controllers/answerController')

router.post('/check', scoreCheck)
router.post('/', answerCheck);

module.exports = router;