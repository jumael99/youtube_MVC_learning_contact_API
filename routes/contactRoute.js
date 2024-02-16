const express = require('express')
const  router =express.Router()

const {getUser} = require('../controllers/userController')

router.route('/').get(getContact);

module.exports = router;