import React, { Component } from 'react';
import { 
  List,
  // Grid, Container, Segments, Segment 
} from 'semantic-ui-react';

// import logo from './logo.svg';
import './App.css';

// Les parts de  l'application
import Header from './components/parts/Header';
import Footer from './components/parts/Footer';
import Track from './components/parts/Track';

// import firebase from 'firebase';
import core from "./json/core.json";
import projects from "./json/projects.json";
import users from "./json/users.json";

// import { User, Project, Track } from "./Interfaces.ts";
import Project from "./classes/Project.js";

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      // storage: storage,
      // storageRef: storageRef,
      // // firestore: firestore,
      core: core.core,
      users: users.users,
      projects: projects.projects,
      currentUser: users.users[0],
      currentProject: projects.projects[0],
    }
    
    this.addProject = this.addProject.bind(this);
    this.removeProject = this.removeProject.bind(this);
  }
    
  // handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  // handleSubmit = () => {
  //     const { title, about } = this.state

  //     this.setState({ submittedTitle: title, submittedAbout: about })

  //     // DB.newProject();
  // }

  // setCurrentProject = (project) => {
  //   this.setState({ currentProject: project })
  // }

  addProject (title) {

    let id = this.state.projects[this.state.projects.length - 1].id + 1;
    let owner = this.state.currentUser.email;

    this.setState({ projects: [...this.state.projects, new Project(id, title, owner)] })
  }

  removeProject (project) {
    this.setState({ projects: this.state.projects.filter(t => t !== project) })
  }
  
  
  render() {
    
    const allTracks = this.state.currentProject.tracks.map((track, track_index) => (
      <List.Item>
          <Track key={track_index} track={track}/>
      </List.Item>
    ))

    console.log(this.state.currentUser);
    console.log(this.state.currentProject);

    return (
      <div>
        <Header 
        projects={this.state.projects} 
        currentUser={this.state.currentUser}
        currentProject={this.state.currentProject}
        />

        <section id="topWindow" className="">

            <div id="tracks-container" className="">
            
              <List horizontal>
                  {allTracks}
              </List>

            </div>

            <div id="sends-container" className="">
              2
              {/* <%- include('../../elements/master') %>
              <%- include('../../elements/return-reverb') %>
              <%- include('../../elements/return-delay') %> */}
            </div>

        </section>

        <Footer
        currentProject={this.state.currentProject}
        />
        
      </div>
    );
  }
}

export default App;
