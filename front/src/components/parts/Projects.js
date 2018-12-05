import React, { Component } from "react"
import { Header, Segment, Grid, Card, Feed, Dimmer, Loader, Icon } from 'semantic-ui-react'
import axios from 'axios'
// import checkToken from './checkToken.js'

import '../../pages/Profile.css'

export default class Projects extends Component {

    constructor(props){
        super(props)

        this.state = {
            isLoading: true,
            projects: []
        }
    }

    componentWillMount() {
        const jwt = sessionStorage.getItem('jwt')
        axios({
            method: 'get',
            url:`http://localhost:3001/users/${'2'}/projects`,
            headers: {Authorization: jwt}})
            .then(response => {
                this.setState({projects: response.data})
                this.setState({isLoading: false})
                // console.log(typeof(this.state.projects))
                // console.log(Object.values(this.state.projects).map(e => {return e}))
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {

        return (
            <Card fluid>
            {this.state.isLoading &&
                <Dimmer active inverted>
                    <Loader/>
                </Dimmer>
            }
                <Card.Content>
                    <Card.Content>
                    <Card.Header>Your projects</Card.Header>
                    </Card.Content>
                    <Card.Content>

                        {!this.state.isLoading &&
                            <div>
                                {this.state.projects.map((project, key) => {
                                    return <div>
                                    {project.id} : {project.name}
                                    </div>
                                })}
                            </div>
                        }

                    </Card.Content>
                </Card.Content>
            </Card>
        )
    }
}