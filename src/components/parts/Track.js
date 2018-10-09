import React, { Component } from 'react'
import { 
    // ImageImage, Dropdown, Menu, 
    // Divider
    Segment,
    } from 'semantic-ui-react'

import Clip from './Clip.js'
import './Track.css';
    
export default class Track extends Component {

    constructor (props) {
        super(props)

        this.state = {

        }

    }
    
    // handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    // handleSubmit = () => {
    //     const { title, about } = this.state

    //     this.setState({ submittedTitle: title, submittedAbout: about })

    //     // DB.newProject();
    // }

    render() {
        // const { activeItem } = this.state;
        // let saveProjects = DB.saveProjects();
    
    const allClips = this.props.track.clips.map((clip, clip_index) => (
        <Segment><Clip key={clip_index} clip={clip} track ={this.props.track}/></Segment>
    ))

        return (
            <Segment.Group id="{ this.props.track.name }" 
                // onclick="showTrack()" 
                className="text-light bg-dark track p-1">
                <Segment className="mb-1">
                    { this.props.track.name }
                </Segment>
                {/* <Segment className="progress mb-2">
                    <div className="progress-bar progress-bar-striped bg-info" role="progressbar" 
                    // style="width: 65%" 
                    aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                </Segment> */}

                <Segment.Group>{ allClips }</Segment.Group>
                {/* { for (let i = this.props.track.length; i <= 12; i++) {
                <%- include('../elements/tracks/empty-clip'); %>
                } } */}
            
                Routing
                <Segment className="">
                    <select className="form-control form-control-sm" name="outputs">
                        <option value="output" disabled selected>output :</option>
                        <option value="master">master</option>
                        <option value="buss_xx">buss_xx</option>
                        <option value="send_xx">send_xx</option>
                        <option value="send_xx">send_xx</option>
                    </select>
                </Segment>

                Vu meter
                <Segment className="" horizontal>
                l
                    <div className=""></div>
                </Segment>
                <Segment className="" horizontal>
                r
                    <div className=""></div>
                </Segment>
                {/* <input id="" name="" list="decibels" type="range" value="-3" min="-64" max="0" step="3"/>
                <datalist id="decibels">
                    <option value="0"/>
                    <option value="-12"/>
                    <option value="-24"/>
                    <option value="-32"/>
                    <option value="-64"/>
                </datalist> */}

            </Segment.Group>

        );
    }
}
