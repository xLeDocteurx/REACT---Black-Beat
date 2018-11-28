const models  = require('../models')

const express = require('express')
const router  = express.Router()
const ent = require('ent')


router.get('/', (req, res) => {
    let data = {

    }
    res.json(data)
})


module.exports = router
