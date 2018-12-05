import React, { Component } from "react"
import { Header, Segment, List, Image, Grid, Card, Feed, Dimmer, Loader, Icon } from 'semantic-ui-react'
import axios from 'axios'
// import checkToken from './checkToken.js'

import '../../pages/Profile.css'

export default class Projects extends Component {

    constructor(props){
        super(props)

        this.state = {
            isLoading: true,
            isLoadingForCollaborations: true,
            projects: []
        }

        // this.loadProject = this.loadProject.bind(this)
    }

    loadProject(id, event){
        console.log(`Loading project : ${id}`)
        window.location.replace("/project")
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
            <Segment>
                <Segment>
                    {this.state.isLoading &&
                        <Dimmer active inverted>
                            <Loader/>
                        </Dimmer>
                    }
                    <h2>Your projects</h2>
                    {!this.state.isLoading &&
                        <List selection verticalAlign='middle'>
                            {this.state.projects.map((project, key) => {
                                return (
                                    <List.Item key={project.id} onClick={(e) => this.loadProject(project.id, e)}>
                                        {/* <Image avatar src='/images/avatar/small/helen.jpg' /> */}
                                        <Icon name="file"/>
                                        <List.Content>
                                            {project.name}
                                        </List.Content>
                                    </List.Item>
                                )
                            })}
                        </List>
                    }
                </Segment>
                <Segment>
                    {this.state.isLoadingForCollaborations &&
                        <Dimmer active inverted>
                            <Loader/>
                        </Dimmer>
                    }
                    <h2>Collaborations</h2>
                </Segment>
            </Segment>
        )
    }
}