const models  = require('../models')

const express = require('express')
const router  = express.Router()
const ent = require('ent')


// Des projets privés ???

// OK
// Voir tous les projets
router.get('/', (req, res) => {
    
    models.Project.findAll({
        // include: [ models.Task ]
    })
        .then((projects) => {
            res.json(projects)
        })
        .catch((err) => {    
            console.log(err) 
            res.send(`
                This is the Black Beat API // SOMETHING WENT WRONG // ${err}
            `)
        })
})

// OK
// Voir UN projet
router.get('/:project_id', (req, res) => {
    const project_id = ent.encode(req.params.project_id)

    models.Project.findByPk(project_id)
        .then((project) => {

            project.getAuthor().then((author) =>{
                project.dataValues.author = author
                project.getContributors().then((contributors) => {
                    project.dataValues.contributors = contributors
                    res.json(project)
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

// OK
// Voir l'auteur d'un projet
router.get('/:project_id/author', (req, res) => {
    const project_id = ent.encode(req.params.project_id)

    models.Project.findByPk(project_id)
        .then((project) => {
            project.getAuthor().then((author) =>{
                res.json(author)
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

// OK
// Voir l'auteur d'un projet
router.get('/:project_id/contributors', (req, res) => {
    const project_id = ent.encode(req.params.project_id)

    models.Project.findByPk(project_id)
        .then((project) => {
            project.getContributors().then((contributors) =>{
                res.json(contributors)
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

// OK
// Créer un projet
router.post('/', (req, res) => {
    const authorId = 1;

    const req_project = req.body.project
    const project = models.Project.build({
        name: req_project.name,
    })

    project.setAuthor(authorId)
        
    project.save()
        .then(
            res.json(project)
        )
        .catch((err) => {    
            console.log(err) 
            res.send(`
                This is the Black Beat API // SOMETHING WENT WRONG // ${err}
            `)
        })

})

// !! A REFAIRE AVEC LA METHODE PATCH
// Actualiser un projet
router.put('/:project_id', (req, res) => {
// router.patch('/:project_id', (req, res) => {
    const req_project =  req.body.project
    const project_id = ent.encode(req.params.project_id)

    models.Project.findByPk(project_id)
        .then((project) => {
            if (!project) res.send(`This is the Black Beat API // YOU ARE NOT DELETING USER // ${project_id}`)
            
            project.update({
                name: req_project.name,
                authorId: project.authorId
            })
                .then(
                    res.send(project)
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

// OK
// Supprimer un projet
router.delete('/:project_id', (req, res) => {
    const project_id = ent.encode(req.params.project_id)

    models.Project.findByPk(project_id)
        .then((project) => {
            if (!project) res.send(`This is the Black Beat API // YOU ARE NOT DELETING USER // ${project_id}`)
            
            project.destroy()
                .then(
                    res.redirect('/projects')
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

// OK
// Rend un utilisateur contributeur du projet
router.post('/:project_id/invite', (req, res) => {

    projectId = ent.encode(req.params.project_id)

    req_contributor = req.body.contributor

    models.Project.findByPk(projectId)
        .then((project) => {
            project.addContributor(req_contributor.id)
                .then(
                    res.redirect(`/projects/${projectId}`)
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
