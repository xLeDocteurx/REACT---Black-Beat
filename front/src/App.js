import React, { Component } from 'react'
import Redux from 'redux'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Route } from "react-router"

// import logo from './logo.svg'
import './App.css'

// Les pages de  l'application
import Welcome from './pages/Welcome'
import LoginForm from './pages/LoginForm'
import LogOut from './pages/LogOut'
import RegisterForm from './pages/RegisterForm'
import Project from './pages/Project'

// Les parts de l'application
import Header from './components/parts/Header'
import HeaderVisitor from './components/parts/HeaderVisitor'
import Profile from './pages/Profile'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      jwt: null,
      isLoggedIn: false,
      // isLoading: false,
      // currentUser: null
    }
  }
  
  componentWillMount() {
      
      if(sessionStorage.getItem('jwt')){
        this.setState({jwt: sessionStorage.getItem('jwt'), isLoggedIn: true})
      }
  }
  
  render() {
    
    return (
      <div>
        {this.state.isLoggedIn ? ( <Header/> ) : ( <HeaderVisitor/> )}

        {/* <Route path="/" component={Welcome} /> */}
        <Route path="/welcome" component={Welcome} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/logout" component={LogOut} />
        <Route path="/profile" component={Profile} />
        <Route path="/project" component={Project} />

      </div>
    )
  }
}

export default App
