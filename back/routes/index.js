// var models  = require('../models');

var express = require('express');
var router  = express.Router();

let core = require('../core.json')

router.get('/', (req, res) => {
    
    res.send(`
        This is the Black Beat API
    `)
})

router.get('/core', (req, res) => {

    const json = core
    res.send(json)
})

module.exports = router
