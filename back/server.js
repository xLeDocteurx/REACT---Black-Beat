const serverConfig = require('./serverConfig.json')



// Serveur
const express = require('express')
// const session = require('express-session')
const cors = require('cors')
// Sécurité
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt')
const ent = require('ent')
// Base de donnés
const mysql = require('mysql2')
const Sequelize = require('sequelize')
// Autres
// const axios = require('axios')
const fs = require('fs')
const bodyParser = require('body-parser')
const cookieparser = require('cookie-parser')



const app = express()
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.use(cookieparser())
// app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static("public"))
app.use(cors())

const index = require('./controllers/index')
app.use('/', index)

const users = require('./controllers/users')
app.use('/users', users)

const auth = require('./controllers/auth')
app.use('/auth', auth)

let core = require('./core.json')
app.get('/commit', (req, res) => {

    console.log('Début de la sauvegarde des donnés')

    fs.writeFile('./core.json', JSON.stringify(core), (err) => {
        if (err) throw err
        console.log('"./core.json" successfully modified!')

        console.log(`Le serveur a bien sauvegardé les donnés`)
    }) 
    
    res.send(`Le serveur a bien sauvegardé les donnés`)
})

app.listen(process.env.PORT || serverConfig.port)

console.log(`Server started ${'!'}`)
console.log(serverConfig)