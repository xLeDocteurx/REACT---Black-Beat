const serverConfig = require('../serverConfig.json')
const models  = require('../models')

const express = require('express')
const router  = express.Router()
const ent = require('ent')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



router.get('/', (req, res) => {
    
    res.send(`
        This is the Black Beat API // AUTHENTICATION //
    `)
})

router.post('/:user_id', (req, res) => {

    // const email = req.body.user.email
    const user_id = req.params.user_id
    const password = req.body.password

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
                        res.send(`
                            This is the Black Beat API // AUTHENTICATION :: LOGIN SUCCESSFUL // 
                            <br> 
                            ${JSON.stringify(user)}
                        `)
                    } else {
                        res.send(`
                            This is the Black Beat API // AUTHENTICATION :: LOGIN FAILED // 
                        `)
                    }
                })
                .catch(err => {
                    console.log(err)
                    res.send(`
                        This is the Black Beat API // AUTHENTICATION :: ERROR // 
                        <br> 
                        ${err}
                    `)
                })
        })
        .catch(err => {
            console.log(err)
            res.send(`
                This is the Black Beat API // SOMETHING WENT WRONG // ${err}
            `)
        })
        
})

module.exports = router
