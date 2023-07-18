const express = require('express')
const path = require('path')
const rootDir = require('../util/path')
const router = express.Router()



router.get('/', (req, res, next) => {

    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
})


router.get('/contactus', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'contact.html'))
})

router.get('/success', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'success.html'))
})


router.post('/contactus', (req, res) => {
    res.redirect('/success')
})



module.exports = router