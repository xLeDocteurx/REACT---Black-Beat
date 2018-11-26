import React, { Component } from 'react'

import axios from 'axios'

import './login_form.css'

class Login_Form extends Component {

    constructor(props) {
        super(props)

    }

    submit() {
        
    }

    render() {
        
        return (
            <form className="">
                <h4>Login Form</h4>
                <div className="">
                    <label for="email">email</label>
                    <input type="text" id="email" name="email"/>
                </div>
                <div className="">
                    <label for="password">password</label>
                    <input type="password" id="password" name="password"/>
                </div>
                <button onclick="this.submit()">Login</button>
            </form>
        )
    }
}

export default Login_Form;