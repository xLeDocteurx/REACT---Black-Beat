import React, { Component } from "react"
import { 
  // List,
  Grid, Container, Header, Segment 
} from 'semantic-ui-react'

// import axios from 'axios'

import "./Welcome.css"

class DAO extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }

  }

  render() {
    
    
    // const allTracks = this.state.currentProject.tracks.map((track, track_index) => (
    //   <List.Item>
    //       <Track key={track_index} track={track}/>
    //   </List.Item>
    // ))

    return (
      <Grid centered>
        <Grid.Column width={8}>
          <Header as="h2" attached="top">Welcome to the BlackBeat</Header>
          <Segment textAlign="center" attached>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }

}

export default DAO
