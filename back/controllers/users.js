const serverConfig = require('../serverConfig.json')
const models  = require('../models')

const express = require('express')
const router  = express.Router()
const ent = require('ent')
const bcrypt = require('bcrypt')

//OK
// Voir tous les utilisateurs
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

//OK
// Voir UN utilisateur
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

// Créer un nouvel utilisateur
router.post('/', (req, res) => {
    const req_user =  req.body.user

    bcrypt.genSalt( serverConfig.security.saltRounds, (err, salt) => {
        bcrypt.hash(req_user.password, salt)
            .then((hash) => {

                const user = models.User.build({
                    username: req_user.username,
                    email: req_user.email,
                    password: hash,
                    avatar: './autop.png',
                    bio: `${req_user.username} is hot and dangerous !`,
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

// router.get('/create/:name', (req, res) => {
//     const name = req.params.name

//     bcrypt.hash(name, serverConfig.security.saltRounds)
//         .then((hash) => {

//             const user = models.User.build({
//                 username: name,
//                 email: `${name}@gmail.com`,
//                 password: hash,
//                 avatar: './autop.png',
//                 bio: `${name} is hot and dangerous !`,
//             })
        
//             user.save()
//                 .then(() => {
//                     res.redirect('/users')
//                 })
//                 .catch((err) => {   
//                     console.log(err) 
//                     res.send(`
//                         This is the Black Beat API // SOMETHING WENT WRONG // ${err}
//                     `)
//                 })
//         })
//         .catch((err) => {    
//             console.log(err) 
//             res.send(`
//                 This is the Black Beat API // SOMETHING WENT WRONG // ${err}
//             `)
//         })

//     // bcrypt.genSalt( serverConfig.security.saltRounds, (err, salt) => {
//     //     bcrypt.hash(name, salt)
//     //         .then((hash) => {

//     //         })
//     //         .catch((err) => {    
//     //                 console.log(err) 
//     //                 res.send(`
//     //                 This is the Black Beat API // SOMETHING WENT WRONG // ${err}
//     //             `)
//     //         })
//     // })

// })

// Actualiser un utilisateur
router.put('/:user_id', (req, res) => {
// router.patch('/:user_id', (req, res) => {
    const req_user =  req.body.user
    const user_id = ent.encode(req.params.user_id)

    // models.User.findById(user_id)
    models.User.findByPk(user_id)
        .then((user) => {
            if (!user) res.send(`This is the Black Beat API // YOU ARE NOT DELETING USER // ${user_id}`)
            
            user.update({
                username: req_user.username,
                email: req_user.email,
                password: req_user.password,
                avatar: '../public/autop.png',
                bio: req_user.bio,
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

// Supprimer un utilisateur
router.delete('/:user_id', (req, res) => {
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
