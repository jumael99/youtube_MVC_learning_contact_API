const express = require('express')
const  router =express.Router()

const {getUgetContactser} = require('../controllers/contactController')

router.route('/').get(getContact);

module.exports = router;

