const express = require('express')
const path = require('path')
const rootDir = require('../util/path')
const router = express.Router()

const contactController = require('../controllers/contact')


router.get('/contactus', contactController.getContact)



router.post('/contactus', contactController.postContact)







module.exports = router