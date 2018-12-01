import React, { Component } from 'react'
import { Route } from "react-router";
// import { Menu } from 'semantic-ui-react'

// import logo from './logo.svg'
import './App.css'

// import firebase from 'firebase'
// import core from './json/core.json'
// import projects from './json/projects.json'
// import users from './json/users.json'

// Les pages de  l'application
import LoginForm from './pages/LoginForm'
import DAO from './pages/DAO'

// Les parts de l'application
import Header from './components/parts/Header'
import HeaderVisitor from './components/parts/HeaderVisitor'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false,
    }
  }
  
  render() {
    
    return (
      <div>
        {this.state.isLoggedIn ? (
          <Header 
          // projects={this.state.projects} 
          />
        ) : (
          <HeaderVisitor/>
        )}


        <Route path="/dao" component={DAO} />
        <Route path="/login" component={LoginForm} />

      </div>
    )
  }
}

export default App
