import React, { Component } from "react"
import { Segment, Grid, Card, Tab, Feed, Dimmer, Loader, Icon } from 'semantic-ui-react'
import axios from 'axios'
// import checkToken from './checkToken.js'

import './Profile.css'

import Projects from '../components/parts/Projects'
import Activity from '../components/parts/Activity'
import Friends from '../components/parts/Friends'

export default class Profile extends Component {

    constructor(props){
        super(props)

        this.state = {
            // user: null
            isLoading: true,
            user: {},
            activity: {},
        }
    }

    componentWillMount() {
        console.log('componentWillMount : Profile')
        const jwt = sessionStorage.getItem('jwt')

        axios({
            method: 'get',
            url:'http://127.0.0.1:3001/users/me',
            headers: {Authorization: jwt}})
            .then(response => {
                this.setState({user: response.data})
                this.setState({isLoading: false})
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {

        const extra = (
            <a>
                <Icon name='user' />
                16 Friends
            </a>
        )

        const panes = [
            {menuItem:'Projects', render: () => <Tab.Pane><Projects userId={this.state.user.id}/></Tab.Pane>},
            {menuItem:'Activity', render: () => <Tab.Pane><Activity/></Tab.Pane>},
            {menuItem:'Friends', render: () => <Tab.Pane><Friends/></Tab.Pane>}
        ]

        return (
            <Segment>
                <Grid centered>
                    <Grid.Column width={3}>
                        {this.state.isLoading &&
                            <Dimmer active inverted>
                                <Loader/>
                            </Dimmer>
                        }
                        
                        <Card
                        // fluid
                        image={this.state.user.avatar}
                        header={this.state.user.username}
                        meta='Friend'
                        description={this.state.user.bio}
                        extra={extra}
                        />
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Tab panes={panes}/>
                    </Grid.Column>
                </Grid>

            </Segment>
        )
    }
}