const router = require('express').Router()

const { check } = require('../controllers/checkController')

router.get('/', check);

module.exports = router;