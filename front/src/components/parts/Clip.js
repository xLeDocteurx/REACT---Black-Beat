import React, { Component } from 'react'
import { 
    Button,
    // Image, Dropdown, Menu, 
    // Divider
    } from 'semantic-ui-react'

import './Clip.css';
    
export default class Clip extends Component {

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

        return (
            <Button.Group fluid className="">
                <Button className="" 
                    // onclick="request_clip({this.props.track.name}, {this.props.clip.id})"
                >{this.props.clip.name}</Button>
                <Button icon className="" 
                    // onclick="launch_clip(<%= track.id %>, <%= index %>);"
                >
                    <i className="fas fa-play"></i>
                </Button>
            </Button.Group>
        )
    }
}