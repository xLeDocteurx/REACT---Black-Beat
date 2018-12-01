import React, { Component } from "react";
import { 
  // List,
  // Grid, Container, Segments, Segment 
} from 'semantic-ui-react';

// import axios from 'axios'

import "./DAO.css";

// import Footer from './components/parts/Footer';
// import Track from './components/parts/Track';

// import { User, Project, Track } from './Interfaces.ts';

class DAO extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    this.addProject = this.addProject.bind(this);
    this.removeProject = this.removeProject.bind(this);
  }

  addProject(title) {
    // let id = this.state.projects[this.state.projects.length - 1].id + 1;
    // let owner = this.state.currentUser.email;

    this.setState({
      // projects: [...this.state.projects, new Project(id, title, owner)]
    });
  }

  removeProject(project) {
    this.setState({ projects: this.state.projects.filter(t => t !== project) });
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

export default DAO;
