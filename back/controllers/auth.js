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
    const req_user_id = req.body.user.id
    const req_password = req.body.user.password

    // models.User.findById(req_user_id)
    models.User.findByPk(req_user_id)
        .then((user) => {
            if (!user) {res.send(`
                This is the Black Beat API // AUTHENTICATION :: THIS USER DOES NOT EXIST // ${req_user_id}
            `)}

            const hashed_password = user.password
            bcrypt.compare(req_password, hashed_password)
                .then(response => {
                    if(response) {
                        jwt.sign({ email: user.email }, serverConfig.jwt.secret,
                            { 
                                // algorithm: 'RS256',
                                expiresIn: '24h'
                            }, 
                            function(err, token) {
                                if(err) {console.log(err);res.send(err)}
                                res.header('Authorization', token).json(user)
                            }
                        )
                    } else {
                        res.send(`
                            This is the Black Beat API // AUTHENTICATION :: LOGIN FAILED // 
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
