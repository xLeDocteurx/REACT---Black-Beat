import React, { Component } from "react";
import { 
  // List,
  // Grid, Container, Segments, Segment 
} from 'semantic-ui-react';

import axios from 'axios'

import "./Project.css";

// import Footer from './components/parts/Footer';
// import Track from './components/parts/Track';

// import { User, Project, Track } from './Interfaces.ts';

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: {}
    }
  }

  componentWillMount() {

    const jwt = sessionStorage.getItem('jwt')
    axios({
      method: 'get',
      url: 'http://127.0.0.1:3001/users/me',
      headers: {Authorization: jwt}})
      .then(response => {
        this.setState({project: response.data})
      })
  }

  render() {
    
    
    // const allTracks = this.state.currentProject.tracks.map((track, track_index) => (
    //   <List.Item>
    //       <Track key={track_index} track={track}/>
    //   </List.Item>
    // ))

    return (
      <div>
        <section id="topWindow" className="">

        <strong>this.state :</strong>
        <pre>
          {/* {this.state} */}
        </pre>

            <div id="tracks-container" className="">
            
              {/* <List horizontal>
                    {allTracks}
                </List> */}

            </div>

            {/* <div id="sends-container" className=""> */}
              {/* 2 */}
              {/* <%- include('../../elements/master') %>
              <%- include('../../elements/return-reverb') %>
              <%- include('../../elements/return-delay') %> */}
            {/* </div> */}

        </section>

        {/* <Footer/> */}
      </div>
    );
  }

}

export default Project;
