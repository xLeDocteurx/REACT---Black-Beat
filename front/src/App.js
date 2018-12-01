import React, { Component } from 'react'
import { 
  // List,
  // Grid, Container, Segments, Segment 
} from 'semantic-ui-react'

// import logo from './logo.svg'
import './App.css'

// import firebase from 'firebase'
import core from './json/core.json'
import projects from './json/projects.json'
import users from './json/users.json'

// Les pages de  l'application
import LoginForm from './pages/LoginForm'
// import DAO from './pages/DAO'

// Les parts de l'application
import Header from './components/parts/Header'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      // storage: storage,
      // storageRef: storageRef,
      // // firestore: firestore,
      core: core.core,
      users: users.users,
      projects: projects.projects,
      currentUser: users.users[0],
      currentProject: projects.projects[0]
    }
  }
  
  render() {
    
    return (
      <div>
        <Header 
        projects={this.state.projects} 
        currentUser={this.state.currentUser}
        currentProject={this.state.currentProject}
        />



        <LoginForm/>
          
        {/* <DAO/> */}

      </div>
    )
  }
}

export default App
