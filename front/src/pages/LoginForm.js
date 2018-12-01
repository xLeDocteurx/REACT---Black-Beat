import React, { Component } from 'react'
import { 
    Button, Form, Segment
} from 'semantic-ui-react'

// import axios from 'axios'

import './LoginForm.css'

class LoginForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: 'email',
            password: 'password'
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const name =  event.target.name
        const value = event.target.value
        this.setState({[name]: value})
    }

    handleSubmit(event) {

        event.preventDefault()
    }

    render() {
        
        return (
            <Segment>
                <Form 
                // loading
                onSubmit={this.handleSubmit}
                >
                    <Form.Field>
                        <label>Email:</label>
                        <input type="text" placeholder="enter ..." 
                            // id="email"
                            name="email"
                            // value={this.state.email} 
                            onChange={this.handleChange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Password:</label>
                        <input type="password" placeholder="enter ..." 
                            // id="password"
                            name="password"
                            // value={this.state.password} 
                            onChange={this.handleChange}/>
                    </Form.Field>
                    <Button type='submit' value="Submit">Submit</Button>
                </Form>
            </Segment>
        )
    }
}

export default LoginForm