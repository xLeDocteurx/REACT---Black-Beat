const serverConfig = require('../serverConfig.json')
const models  = require('../models')

const express = require('express')
const router  = express.Router()
const ent = require('ent')
const bcrypt = require('bcrypt')

const checkAuth = require('../middleware/checkAuth')

// Voir voir le profil de l'utilisateur courant
router.get('/me', checkAuth, (req, res) => {
    // if(!req.user) { res.status(400).json(req) }
    console.log('requette sur la route "/users/me"')
    res.json(req.user)
})

//OK
// Voir tous les utilisateurs
router.get('/', (req, res) => {

    models.User.findAll({
        // include: [ models.Task ]
    })
        .then((users) => {
            res.json(users)
        })
        .catch((e) => {
            res.status(400).send(e)
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
        .catch((e) => {
            res.status(400).send(e)
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
        .catch((e) => {
            res.status(400).send(e)
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
                .catch((e) => {
                    res.status(400).send(e)
                })
            })
            .catch((e) => {
                res.status(400).send(e)
            })
        })
        .catch((e) => {
            res.status(400).send(e)
        })
})

//OK
// Voir les projets d'un utilisateur
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
        .catch((e) => {
            res.status(401).send(e)
        })
})

//OK
// Voir les collaborations d'un utilisateur
router.get('/:user_id/collaborations', (req, res) => {
    const user_id = ent.encode(req.params.user_id)
    // models.User.findById(user_id)
    models.User.findByPk(user_id)
        .then((user) => {
            if (!user) res.send(`This is the Black Beat API // YOU ARE NOT READING USER // ${user_id} // PROJECTS`)

            user.getContributions()
                .then(projects => {
                    // projects.forEach(project => {
                    //     project.getAuthor().then((author) =>{
                    //         project.dataValues.authorName = author.username
                    //     })
                    // })
                    res.json(projects)
                })
        })
        .catch((e) => {
            res.status(401).send(e)
        })
})

// !! Déplacer cette route vers son propre fichier 'register.js'   ( un peu comme le system d'auth )
// OK
// Créer un nouvel utilisateur
router.post('/', (req, res) => {
    const req_user = req.body.user

    bcrypt.genSalt( serverConfig.bcrypt.saltRounds, (err, salt) => {
        bcrypt.hash(req_user.password, salt)
            .then((hash) => {
            
                const user = models.User.build({
                    active: 1,
                    username: req_user.email.split('@')[0],
                    email: req_user.email,
                    password: hash,
                    avatar: './avatar.jpg',
                    bio: `${req_user.username} did not fill their resume... yet !`,
                    currentProjectId: 1
                })

                user.save()
                    .then(() => {
                        // res.redirect('/users')
                        res.json(user)
                    },
                    (e) => {console.log(e)})
                    .catch((e) => {
                        console.log(e)
                        res.status(400).send(e)
                    })
            })
            .catch((e) => {
                res.status(400).send(e)
            })
    })

})

// OK
// Actualiser un utilisateur
router.put('/me', checkAuth, (req, res) => {
    // router.put('/:user_id', (req, res) => {
    // router.patch('/:user_id', (req, res) => {
        const req_user =  req.body.user
        const user_id = req_user.id

                console.log('req_user.avatar')
        // bcrypt.genSalt( serverConfig.bcrypt.saltRounds, (err, salt) => {
        //     bcrypt.hash(req_user.password, salt)
        //         .then((hash) => {
            models.User.findByPk(user_id)
            .then((user) => {
                if (!user) res.send(`This is the Black Beat API // YOU ARE NOT UPDATING USER // ${user_id}`)

                user.update({
                    active: req_user.active,
                    username: req_user.username,
                    email: req_user.email,
                    password: req_user.password,
                    avatar: req_user.avatar,
                    bio: req_user.bio,
                    currentProjectId: req_user.currentProjectId
                })
                    .then(
                        res.send(user)
                    )
                    .catch((e) => {
                        res.status(400).send(e)
                    })
            })
            .catch((e) => {
                res.status(400).send(e)
            })
    //         })
    //         .catch((e) => {
    //             res.status(400).send(e)
    //         })
    // })
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
                .catch((e) => {
                    res.status(400).send(e)
                })
        })
        .catch((e) => {
            res.status(400).send(e)
        })
})

module.exports = router
