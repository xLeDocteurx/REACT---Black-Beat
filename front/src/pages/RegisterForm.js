import React, { Component } from 'react'
import axios from 'axios'
import { 
    Dimmer, Loader, Grid, Segment, Button, Form
} from 'semantic-ui-react'

import './Forms.css'

class RegisterForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const name =  event.target.name
        const value = event.target.value
        this.setState({[name]: value})
    }

    handleSubmit(event) {
        this.setState({isLoading: true})
        const user = {
            "email": this.state.email,
            "password": this.state.password,
            "avatar": "./logo.png",
            "bio": `${this.state.email} did not filled his resume at the moment`,
            "currentProjectId": 1
        }

        axios.post('http://localhost:3001/users', {user})
            .then((response) => {
                console.table(response.data)
                window.location.replace("/profile")
            },
            (response) => {
                // alert(response.response.data)
                window.location.replace("/register")
            })
        event.preventDefault()
    }

    render() {
        
        return (
            <Grid centered>
                <Grid.Column width={8}>
                    <Segment>
                        {this.state.isLoading ? (
                            <Dimmer active inverted>
                                <Loader/>
                            </Dimmer>
                        ) : ('')}
                        <h1>Register</h1>
                        <Form 
                        // loading
                        onSubmit={this.handleSubmit}
                        >
                            <Form.Field>
                                <label>Email:</label>
                                <input type="text" placeholder="Enter a valid email adress" 
                                    // id="email"
                                    name="email"
                                    // value={this.state.email} 
                                    // value=""
                                    onChange={this.handleChange}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Password:</label>
                                <input type="password" placeholder="Enter an username" 
                                    // id="password"
                                    name="password"
                                    // value={this.state.password}
                                    // value=""
                                    onChange={this.handleChange}/>
                            </Form.Field>
                            <Button type='submit' value="Submit">Submit</Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }
}

export default RegisterForm