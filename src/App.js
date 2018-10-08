import React, { Component } from 'react';
// import { Grid, Container, Segments, Segment } from 'semantic-ui-react';

// import logo from './logo.svg';
import './App.css';



// Les parts de  l'application
import Header from './components/parts/Header';



// import firebase from 'firebase';

import core from "./json/core.json";
import projects from "./json/projects.json";
import users from "./json/users.json";

class App extends Component {

  
  state = { 
    core: core.core,
    users: users.users,
    projects: projects.projects,
    currentUser: users.users[0],
    currentProject: projects.projects[0],
    // currentProject: {id:0, title: 'this is were we start', about: 'xxx'} 
  }

  setCurrentProject = (project) => {
    this.setState({
      currentProject: project
    });
  };

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     // storage: storage,
  //     // storageRef: storageRef,
  //     // // firestore: firestore,

  //     currentProject: {id:0, title: 'this is were we start', about: 'xxx'}
  //   };
  // }

  render() {
    
    let currentProject = this.state.currentProject;
    let currentUser = this.state.currentUser;
    // let mapped = ["hola", "hallo", "bonjour", "hello"]
    
    // console.log(this.state.projects);
    console.log(currentUser);
    console.log(currentProject);
    // console.table(this.state.projects);
    return (
      <div>
        {/* <DB/> */}
        {/* {DB.getProjects} */}
        <Header 
        projects={this.state.projects} 
        currentUser={this.state.currentUser}
        currentProject={this.state.currentProject}
        />



          {/* <Segment.Group className="no-m">
            <Segment.Group id="top-row" horizontal>
              <Segment id="segment1">
                {  }
              </Segment>
              <Segment id="segment2">2</Segment>
            </Segment.Group>
            <Segment id="segment3">3</Segment>
          </Segment.Group> */}

{/* <button onClick={this.setCurrentProject(0)}>0</button>
<button onClick={this.setCurrentProject(2)}>2</button>
<button onClick={this.setCurrentProject(4)}>4</button> */}

          <section id="topWindow" className="row m-0">

              <div id="tracks-container" className="col d-flex flex-row p-0">
              1
              {/* { currentProject && */}
              <ul>
                {Object.keys(currentProject).map((element, index) => (
                  <li key={index}>
                      <b>{element} : </b>
                      { typeof(currentProject[element]) === 'object' || typeof(currentProject[element]) === 'array' ? (
                        <ul> 
                          { currentProject[element].map((value, key) => (
                              <li>
                                <b>{key} : </b> {value.name} !! Sample Pack : {value.samplePack}
                              </li>
                          )) }
                        </ul>
                      ) : (
                        currentProject[element]
                      )}
                  </li>
                )) }
              </ul>
              {/* } */}
              
              {/* <% if (locals.data) { %>

                  <% data.project.tracks.forEach( track => { %>
                      <%- include('../../elements/track', { track: track }); %>
                  <% }); %>
              <% } %> */}
              </div>


              <div className="col-sm-1 d-flex flex-row-reverse p-0">
              2
                  {/* <%- include('../../elements/master') %>
                  <%- include('../../elements/return-reverb') %>
                  <%- include('../../elements/return-delay') %> */}
              </div>
          </section>

          <div>
            <div>3</div>
          </div>

      </div>
    );
  }
}

export default App;
