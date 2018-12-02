const serverConfig = require('../serverConfig.json')
const models  = require('../models')

const express = require('express')
const router  = express.Router()
const ent = require('ent')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const checkAuth = require('../middleware/checkAuth')

router.get('/', (req, res) => {
    
    res.send(`
        This is the Black Beat API // AUTHENTICATION //
    `)
})

router.post('/login', (req, res) => {

    // const email = req.body.user.email
    if(!req.body.user.email && !req.body.user.password){res.status(400).send(`WTF`)}
    const req_user_email = req.body.user.email
    const req_password = req.body.user.password

    // models.User.findById(req_user_email)
    models.User.findAll({
        where: {
            email: req_user_email
        }
    })
        .then((users) => {
            if (!users[0]) {res.status(400).send(`
                THIS USER DOES NOT EXIST
            `)}

            const hashed_password = users[0].password
            bcrypt.compare(req_password, hashed_password)
                .then(response => {
                    if(response) {
                        jwt.sign({ email: users[0].email }, serverConfig.jwt.secret,
                            {
                                // algorithm: 'RS256',
                                expiresIn: '24h'
                            },
                            function(err, token) {
                                if(err) {console.log(err);res.send(err)}
                                res.header('Authorization', token).json(users[0])
                            }
                        )
                    } else {
                        res.status(400).send(`
                            WRONG PASSWORD
                        `)
                    }
                })
                .catch((e) => {
                    res.status(400).send(e)
                })
        })
        .catch((e) => {
            res.status(400).send(e)
        })
        
})

router.post('/logout', checkAuth, (req, res) => {

    req.user.Authorisation = null
    res.redirect('/users/me')
})

module.exports = router
