const serverConfig = require('../serverConfig.json')
const models  = require('../models')

const express = require('express')
const router  = express.Router()
const ent = require('ent')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const authenticate = require('../middleware/authenticate')

router.get('/', (req, res) => {
    
    res.send(`
        This is the Black Beat API // AUTHENTICATION //
    `)
})

router.post('/login', (req, res) => {

    // const email = req.body.user.email
    const user_id = req.body.user.user_id
    const password = req.body.user.password

    // models.User.findById(user_id)
    models.User.findByPk(user_id)
        .then((user) => {
            if (!user) {res.send(`
                This is the Black Beat API // AUTHENTICATION :: THIS USER DOES NOT EXIST // ${user_id}
            `)}

            const hashed_password = user.password
            bcrypt.compare(password, hashed_password)
                .then(response => {
                    if(response) {
                        user.generateAuthToken(serverConfig.jwt.secret)
                            .then((token) => {
                                res.send(`
                                    This is the Black Beat API // AUTHENTICATION :: LOGIN SUCCESSFUL // 
                                    <br> 
                                    stringified : ${JSON.stringify(token)}
                                    <br>
                                    nature : ${token}
                                `)
                            })
                            .catch((e) => {
                                res.status(400).send(e)
                            })
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

router.post('/logout', authenticate, (req, res) => {

    req.user.Authorisation = null
    res.redirect('/users/me')
})

module.exports = router
