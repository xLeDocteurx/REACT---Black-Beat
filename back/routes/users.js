const serverConfig = require('../serverConfig.json')
const models  = require('../models')

const express = require('express')
const router  = express.Router()
const ent = require('ent')
const bcrypt = require('bcrypt')



router.get('/', (req, res) => {

    models.User.findAll({
        // include: [ models.Task ]
    })
        .then((users) => {
            res.send(users)
        })
        .catch((err) => {    
            console.log(err) 
            res.send(`
                This is the Black Beat API // SOMETHING WENT WRONG // ${err}
            `)
        })
})

router.get('/create', (req, res) => {
    const name = 'xxx'

    bcrypt.genSalt( serverConfig.security.saltRounds, (err, salt) => {
        bcrypt.hash(name, salt)
            .then((hash) => {

                const user = models.User.build({
                    username: name,
                    email: `${name}@gmail.com`,
                    password: hash,
                    avatar: './autop.png',
                    bio: `${name} is hot and dangerous !`,
                })
            
                user.save()
                    .then(() => {
                        res.redirect('/users')
                    })
                    .catch((err) => {   
                        console.log(err) 
                        res.send(`
                            This is the Black Beat API // SOMETHING WENT WRONG // ${err}
                        `)
                    })
            })
            .catch((err) => {    
                    console.log(err) 
                    res.send(`
                    This is the Black Beat API // SOMETHING WENT WRONG // ${err}
                `)
            })
    })

})

router.get('/create/:name', (req, res) => {
    const name = req.params.name

    bcrypt.hash(name, serverConfig.security.saltRounds)
        .then((hash) => {

            const user = models.User.build({
                username: name,
                email: `${name}@gmail.com`,
                password: hash,
                avatar: './autop.png',
                bio: `${name} is hot and dangerous !`,
            })
        
            user.save()
                .then(() => {
                    res.redirect('/users')
                })
                .catch((err) => {   
                    console.log(err) 
                    res.send(`
                        This is the Black Beat API // SOMETHING WENT WRONG // ${err}
                    `)
                })
        })
        .catch((err) => {    
            console.log(err) 
            res.send(`
                This is the Black Beat API // SOMETHING WENT WRONG // ${err}
            `)
        })

    // bcrypt.genSalt( serverConfig.security.saltRounds, (err, salt) => {
    //     bcrypt.hash(name, salt)
    //         .then((hash) => {

    //         })
    //         .catch((err) => {    
    //                 console.log(err) 
    //                 res.send(`
    //                 This is the Black Beat API // SOMETHING WENT WRONG // ${err}
    //             `)
    //         })
    // })

})

router.get('/:user_id', (req, res) => {
    const user_id = ent.encode(req.params.user_id)

    // models.User.findById(user_id)
    models.User.findByPk(user_id)
        .then((user) => {
            if (!user) res.send(`This is the Black Beat API // YOU ARE NOT READING USER // ${user_id}`)
            res.send(user)
        })
        .catch((err) => {    
            console.log(err)
            res.send(`
                This is the Black Beat API // SOMETHING WENT WRONG // ${err}
            `)
        })
})

router.post('/:user_id/update', (req, res) => {
    const user_id = ent.encode(req.params.user_id)

    // models.User.findById(user_id)
    models.User.findByPk(user_id)
        .then((user) => {
            if (!user) res.send(`This is the Black Beat API // YOU ARE NOT DELETING USER // ${user_id}`)
            
            user.update({
                username: req.body.user.username,
                email: req.body.user.email,
                password: req.body.user.password,
                avatar: '../public/autop.png',
                bio: req.body.user.bio,
            })
                .then(
                    res.send(user)
                )
                .catch((err) => {    
                    console.log(err) 
                    res.send(`
                        This is the Black Beat API // SOMETHING WENT WRONG // ${err}
                    `)
                })
        })
        .catch((err) => {    
            console.log(err) 
            res.send(`
                This is the Black Beat API // SOMETHING WENT WRONG // ${err}
            `)
        })
})

router.get('/:user_id/delete', (req, res) => {
    const user_id = ent.encode(req.params.user_id)

    models.User.findByPk(user_id)
        .then((user) => {
            if (!user) res.send(`This is the Black Beat API // YOU ARE NOT UPDATING USER // ${user_id}`)
            
            user.destroy()
                .then(
                    res.redirect('/users')
                )
                .catch((err) => {    
                        console.log(err) 
                        res.send(`
                        This is the Black Beat API // SOMETHING WENT WRONG // ${err}
                    `)
                })
        })
        .catch((err) => {    
            console.log(err) 
            res.send(`
                This is the Black Beat API // SOMETHING WENT WRONG // ${err}
            `)
        })
})

module.exports = router
