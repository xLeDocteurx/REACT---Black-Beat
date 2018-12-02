import React, { Component } from 'react'
import axios from 'axios'
import { 
    Grid, Segment, Button, Form
} from 'semantic-ui-react'

import './Forms.css'

class RegisterForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
            email: 'email',
            password: 'password'
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
            "email": "name@gmail.com",
            "password": "name",
            "avatar": "./autop.png",
            "bio": "name is hot and dangerous !",
            "currentProjectId": 1
        }
        console.log('user')
        console.log(user)
        axios.post('http://localhost:3001/users', {user})
            .then((response) => {
                console.table(response.data)
            },
            (response) => {
                alert(response.response.data)
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

export default RegisterForm