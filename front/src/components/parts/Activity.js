import React, { Component } from "react"
import { Segment, Grid, Card, Feed, Dimmer, Loader, Icon } from 'semantic-ui-react'
import axios from 'axios'
// import checkToken from './checkToken.js'

import '../../pages/Profile.css'

export default class Activity extends Component {

    constructor(props){
        super(props)

        this.state = {
            isLoading: true
        }
    }

    componentWillMount() {
        console.log('componentWillMount : Activity')
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
                    <Card.Header>Recent activity</Card.Header>
                    </Card.Content>
                    <Card.Content>
                    <Feed>
                        <Feed.Event>
                        <Feed.Label image="./avatar.jpg" />
                        <Feed.Content>
                            <Feed.Date content="1 day ago" />
                            <Feed.Summary>
                            You added <a>Jenny Hess</a> as a friend.
                            </Feed.Summary>
                        </Feed.Content>
                        </Feed.Event>

                        <Feed.Event>
                        <Feed.Label image="./avatar.jpg" />
                        <Feed.Content>
                            <Feed.Date content="3 days ago" />
                            <Feed.Summary>
                            You created a new project <a>Boleros</a>
                            </Feed.Summary>
                        </Feed.Content>
                        </Feed.Event>

                        <Feed.Event>
                        <Feed.Label image="./avatar.jpg" />
                        <Feed.Content>
                            <Feed.Date content="4 days ago" />
                            <Feed.Summary>
                            You added <a>Elliot Baker</a> as a friend.
                            </Feed.Summary>
                        </Feed.Content>
                        </Feed.Event>
                    </Feed>
                    </Card.Content>
                </Card.Content>
            </Card>
        )
    }
}