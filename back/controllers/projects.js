const models  = require('../models')

const express = require('express')
const router  = express.Router()
const ent = require('ent')


// Des projets privés ???

// OK
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
router.get('/:project_id', (req, res) => {
    const project_id = req.params.project_id

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


module.exports = router
