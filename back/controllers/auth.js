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
    const req_user_id = req.body.user.id
    const req_password = req.body.user.password

    // models.User.findById(req_user_id)
    models.User.findByPk(req_user_id)
        .then((user) => {
            if (!user) {res.send(`
                This is the Black Beat API // AUTHENTICATION :: THIS USER DOES NOT EXIST // ${req_user_id}
            `)}

            const hashed_password = user.password
            console.log('lancement de la comparaison')
            bcrypt.compare(req_password, hashed_password)
                .then(response => {
                    console.log(`nous allons comparer ${req_password} et ${hashed_password}`)
                    if(response) {
                        console.log('il y a eu une réponse')
                        user.generateAuthToken(serverConfig.jwt.secret)
                            .then((token) => {
                                console.log('onrécupère le token')
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
