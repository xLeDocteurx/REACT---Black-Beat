import React, { Component } from "react"
import { Segment,
    // Grid, Card, Feed,
    Dimmer, Loader,
    // Icon
} from 'semantic-ui-react'
// import axios from 'axios'
// import checkToken from './checkToken.js'

import '../../pages/Profile.css'

export default class Friends extends Component {

    constructor(props){
        super(props)

        this.state = {
            isLoading: true
        }
    }

    componentWillMount() {
        console.log('componentWillMount : Friends')
    }

    render() {

        return (
            <Segment>
            {this.state.isLoading &&
                <Dimmer active inverted>
                    <Loader/>
                </Dimmer>
            }
                <h2>Your friends</h2>
            </Segment>
        )
    }
}