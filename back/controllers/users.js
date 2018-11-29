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
            res.json(users)
        })
        .catch((err) => {    
            console.log(err) 
            res.send(`
                This is the Black Beat API // SOMETHING WENT WRONG // ${err}
            `)
        })
})

// OK
// Voir les utilisateurs activés
router.get('/actives', (req, res) => {

    models.User.findAll({
        // include: [ models.Task ]
        where: {
            active: true
        }
    })
        .then((users) => {
            res.json(users)
        })
        .catch((err) => {    
            console.log(err) 
            res.send(`
                This is the Black Beat API // SOMETHING WENT WRONG // ${err}
            `)
        })
})

// Voir les utilisateurs désactivés
router.get('/disabled', (req, res) => {

    models.User.findAll({
        // include: [ models.Task ]
        where: {
            active: false
        }
    })
        .then((users) => {
            res.json(users)
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
            
            user.getProjects().then(projects => {
                user.dataValues.projects = projects

                user.getContributions().then(contributions => {
                    user.dataValues.contributions = contributions

                    res.json(user)
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
        .catch((err) => {    
            console.log(err)
            res.send(`
                This is the Black Beat API // SOMETHING WENT WRONG // ${err}
            `)
        })
})

//OK
// Voir UN utilisateur
router.get('/:user_id/projects', (req, res) => {
    const user_id = ent.encode(req.params.user_id)

    // models.User.findById(user_id)
    models.User.findByPk(user_id)
        .then((user) => {
            if (!user) res.send(`This is the Black Beat API // YOU ARE NOT READING USER // ${user_id} // PROJECTS`)

            user.getProjects().then(projects => {
                res.json(projects)
            })
        })
        .catch((err) => {    
            console.log(err)
            res.send(`
                This is the Black Beat API // SOMETHING WENT WRONG // ${err}
            `)
        })
})

// OK
// Créer un nouvel utilisateur
router.post('/', (req, res) => {
    const req_user =  req.body.user

    bcrypt.genSalt( serverConfig.security.saltRounds, (err, salt) => {
        bcrypt.hash(req_user.password, salt)
            .then((hash) => {

                const user = models.User.build({
                    active: req_user.active,
                    username: req_user.username,
                    email: req_user.email,
                    password: hash,
                    avatar: './autop.png',
                    bio: `${req_user.username} is hot and dangerous !`,
                    currentProjectId: 1
                })
            
                user.save()
                    .then(() => {
                        // res.redirect('/users')
                        res.json(user)
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

// OK
// Actualiser un utilisateur
router.put('/:user_id', (req, res) => {
// router.patch('/:user_id', (req, res) => {
    const req_user =  req.body.user
    const user_id = ent.encode(req.params.user_id)

    bcrypt.genSalt( serverConfig.security.saltRounds, (err, salt) => {
        bcrypt.hash(req_user.password, salt)
            .then((hash) => {
                models.User.findByPk(user_id)
                    .then((user) => {
                        if (!user) res.send(`This is the Black Beat API // YOU ARE NOT UPDATING USER // ${user_id}`)
                        
                        user.update({
                            active: req_user.active,
                            username: req_user.username,
                            email: req_user.email,
                            password: hash,
                            avatar: '../public/autop.png',
                            bio: req_user.bio,
                            currentProjectId: req_user.currentProjectId
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
            .catch((err) => {    
                    console.log(err) 
                    res.send(`
                    This is the Black Beat API // SOMETHING WENT WRONG // ${err}
                `)
            })
    })
})

// Désactiver un utilisateur

// OK
// Supprimer un utilisateur
router.delete('/:user_id', (req, res) => {
    const user_id = ent.encode(req.params.user_id)

    models.User.findByPk(user_id)
        .then((user) => {
            if (!user) res.send(`This is the Black Beat API // YOU ARE NOT DELETING USER // ${user_id}`)
            
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
