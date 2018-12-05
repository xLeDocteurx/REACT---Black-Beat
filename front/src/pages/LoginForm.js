import React, { Component } from 'react'
import axios from 'axios'
import { 
    Dimmer, Loader, Grid, Segment, Button, Form
} from 'semantic-ui-react'

import './Forms.css'

class LoginForm extends Component {

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
            "password": this.state.password
        }
        axios.post('http://localhost:3001/auth/login', {user})
            .then(response => {
                sessionStorage.setItem('jwt', response.headers.authorization)
                window.location.replace("/profile")
            })
            .catch(err => {
                alert(err.response.data)
                window.location.replace("/login")
            })
        event.preventDefault()
    }

    render() {
        
        return (
            <Grid centered>
                <Grid.Column width={8}>
                    <Segment>
                        {this.state.isLoading &&
                            <Dimmer active inverted>
                                <Loader/>
                            </Dimmer>
                        }
                        <h1>Log In</h1>
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
                </Grid.Column>
            </Grid>
        )
    }
}

export default LoginForm