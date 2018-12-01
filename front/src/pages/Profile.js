import React, { Component } from "react"
import { Segment, Grid, Card, Feed, Icon } from 'semantic-ui-react'

export default class Profile extends Component {

    constructor(props){
        super(props)

        this.state = {

        }
    }

    render() {

        const extra = (
            <a>
                <Icon name='user' />
                16 Friends
            </a>
        )

        return (
            <Segment>

                <Grid centered>
                    <Grid.Column width={3}>
                        <Card
                        fluid
                        image='/autop.jpg'
                        header='LeDocteur'
                        meta='Friend'
                        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                        extra={extra}
                        />
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Card fluid>
                            <Card.Content>
                                <Card.Content>
                                <Card.Header>Recent Activity</Card.Header>
                                </Card.Content>
                                <Card.Content>
                                <Feed>
                                    <Feed.Event>
                                    <Feed.Label image='./autop.jpg' />
                                    <Feed.Content>
                                        <Feed.Date content='1 day ago' />
                                        <Feed.Summary>
                                        You added <a>Jenny Hess</a> as a friend.
                                        </Feed.Summary>
                                    </Feed.Content>
                                    </Feed.Event>

                                    <Feed.Event>
                                    <Feed.Label image='./autop.jpg' />
                                    <Feed.Content>
                                        <Feed.Date content='3 days ago' />
                                        <Feed.Summary>
                                        You created a new project <a>Boleros</a>
                                        </Feed.Summary>
                                    </Feed.Content>
                                    </Feed.Event>

                                    <Feed.Event>
                                    <Feed.Label image='./autop.jpg' />
                                    <Feed.Content>
                                        <Feed.Date content='4 days ago' />
                                        <Feed.Summary>
                                        You added <a>Elliot Baker</a> as a friend.
                                        </Feed.Summary>
                                    </Feed.Content>
                                    </Feed.Event>
                                </Feed>
                                </Card.Content>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid>

            </Segment>
        )
    }
}