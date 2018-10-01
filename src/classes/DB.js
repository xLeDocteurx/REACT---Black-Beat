// import React, { Component } from "react";

// import core from "./../json/core.json";
import projects from "./../json/projects.json";
// import users from "./../json/users.json";

const fs = require('fs');



// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('ReactSequencer', 'root', '314100ab', {
//     host: 'localhost',
//     dialect: 'mysql'|'sqlite'|'postgres'|'mssql',

//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     },

//     // // SQLite only
//     // storage: 'path/to/database.sqlite',

//     // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
//     operatorsAliases: false
// });

export default class DB {

    projects = projects.projects;

    getProjects () {
        return(this.projects);
    }
    
    // state = {};

    // constructor (props) {
    //     super(props)

    //     this.currentProject ? this.currentProject = this.props.currentProject : this.currentProject = null;
    // }


    static newProject (newProject) {
        let newProjects = [...projects, newProject];
        // projects.push(newProject)

        // fs.writeFile(`./../json/prout.json`, JSON.stringify(newProjects), function (err) {
        //     if (err) throw err;
        //     console.log('JSON successfully modified!');
        // });
    }
    
    static saveProject (idProject) {
        console.log(`Trying to save the current project : ${idProject}`);
    }
        
    static loadProject (idProject) {
        console.log(`Trying to load project : ${idProject}`);
    }

    static blbl(){
        return "Hola";
    }

}

// export default DB;