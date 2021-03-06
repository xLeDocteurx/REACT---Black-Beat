import React, { Component } from "react"
import { 
    // Header,
    Segment, List,
    // Image, Grid, Card, Feed, 
    Dimmer, Loader, Icon } from 'semantic-ui-react'
import axios from 'axios'
// import checkToken from './checkToken.js'

import '../../pages/Profile.css'

export default class Projects extends Component {

    constructor(props){
        super(props)

        this.state = {
            isLoading: true,
            isLoadingForCollaborations: true,
            user: {},
            projects: [],
            collaborations: []
        }

        // this.loadProject = this.loadProject.bind(this)
    }

    loadProject(id, event){
        console.log(`Loading project : ${id}`)
        const jwt = sessionStorage.getItem('jwt')
        const user = this.state.user
        user.currentProjectId = id
        this.setState({currentProjectId: id})
        axios({
            method: 'put',
            url: 'http://127.0.0.1:3001/users/me',
            headers: {Authorization: jwt},
            data: {user: user}})
        .then(responser => {
            console.log('yeah')
            // window.location.replace("/profile")
            window.location.replace("/project")
        })
    }

    componentWillMount() {
        console.log('componentWillMount : Projects')
        const jwt = sessionStorage.getItem('jwt')

        // Remplacer ceci par un call au store de redux
        axios({
            method: 'get',
            url:'http://127.0.0.1:3001/users/me',
            headers: {Authorization: jwt}})
            .then(response => {
                this.setState({user: response.data})
                console.log(this.state.user)
                axios({
                    method: 'get',
                    url:`http://127.0.0.1:3001/users/${this.state.user.id}/projects`,
                    headers: {Authorization: jwt}})
                    .then(response => {
                        this.setState({projects: response.data})
                        this.setState({isLoading: false})
                    })
                    .catch(err => {
                        console.log(err)
                    })

                axios({
                    method: 'get',
                    url:`http://127.0.0.1:3001/users/${this.state.user.id}/collaborations`,
                    headers: {Authorization: jwt}})
                    .then(response => {
                        this.setState({collaborations: response.data})
                        this.setState({isLoadingForCollaborations: false})
                    })
                    .catch(err => {
                        console.log(err)
                    })
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
                                            {this.state.user.currentProjectId === project.id ? (
                                                <span>{project.name}
                                                <div className="ui left pointing label">
                                                    Current project
                                                </div></span>
                                            ) : (
                                                <span>{project.name}</span>
                                            )}
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
                    {!this.state.isLoadingForCollaborations &&
                        <List selection verticalAlign='middle'>
                            {this.state.collaborations.map((project, key) => {
                                return (
                                    <List.Item key={project.id} onClick={(e) => this.loadProject(project.id, e)}>
                                        {/* <Image avatar src='/images/avatar/small/helen.jpg' /> */}
                                        <Icon name="file"/>
                                        <List.Content>
                                            {this.state.user.currentProjectId === project.id ? (
                                                <span>{project.name}
                                                <div className="ui left pointing label">
                                                    Current project
                                                </div></span>
                                            ) : (
                                                <span>{project.name}</span>
                                            )}
                                        </List.Content>
                                    </List.Item>
                                )
                            })}
                        </List>
                    }
                </Segment>
            </Segment>
        )
    }
}