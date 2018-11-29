// var models  = require('../models');
const checkAuth = require('../middleware/checkAuth')

var express = require('express');
var router  = express.Router();

let core = require('../core.json')

router.get('/', (req, res) => {
    
    res.send(`
        This is the Black Beat API
    `)
})

router.get('/404', (req, res) => {
    
    res.send(`
        <h1>404</h1>

        <br>
        
    `)
})

router.get('/core', (req, res) => {

    const json = core
    res.send(json)
})

module.exports = router
