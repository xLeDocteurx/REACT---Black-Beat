import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import { 
    // Image,
    Dropdown, Menu, 
    // Divider
    } from "semantic-ui-react"

import NewModal from "../modals/NewModal"
import LoadModal from "../modals/LoadModal"

import './Header.css'

export default class Header extends Component {

    // state = {}

    constructor (props) {
        super(props)

        this.state = {
            
        }

    }
    
    // handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    // handleSubmit = () => {
    //     const { title, about } = this.state

    //     this.setState({ submittedTitle: title, submittedAbout: about })

    //     // DB.newProject()
    // }

    render() {
        // const { activeItem } = this.state
        // let saveProjects = DB.saveProjects()

        return (
        <Menu>
            {/* <Menu.Item
            as={NavLink}
            to="/welcome"
            activeClassName="active"
            >
            Welcome
            </Menu.Item> */}

            <Dropdown item text="Project">
                <Dropdown.Menu>
                    
                    {/* <NewModal /> */}

                    {/* <LoadModal projects={this.state.projects}/> */}

                    <Dropdown.Item 
                        as={NavLink}
                        to="/project"
                        // activeClassName="active"
                        text='Show'
                        // description='ctrl + s' 
                        icon='eye'
                        // onClick={this.showProject}
                    />

                    <Dropdown.Item 
                        // as="{NavLink}"
                        // to="#"
                        // activeClassName="active"
                        text='Save'
                        description='ctrl + s' 
                        icon='save'
                        // onClick={this.saveProjects}
                    />

                    <Dropdown.Item 
                        // as="{NavLink}"
                        // to="#"
                        // activeClassName="active"
                        text='Delete'
                        // description='ctrl + s' 
                        icon='trash'
                        // onClick={this.saveProjects}
                    />

                    <Dropdown.Divider />
                    <Dropdown.Header>Export</Dropdown.Header>
                    <Dropdown.Item
                        // as="{NavLink}"
                        // to="#"
                        // activeClassName="active"
                        text='Share'
                        // description='ctrl + s' 
                        icon='share'
                        // onClick={this.saveProjects}
                    />
                </Dropdown.Menu>
            </Dropdown>

            {/* <Dropdown item text="Project">
            <Dropdown.Menu>
                <Dropdown.Item>Add Drum Track</Dropdown.Item>
                <Dropdown.Item>Add MIDI Track</Dropdown.Item>
                <Dropdown.Item>Add Audio Track</Dropdown.Item>
                <Dropdown.Item>Add Audio Input</Dropdown.Item>
                <Dropdown.Item>Add Return</Dropdown.Item>
                <Dropdown.Item>Add Scene</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Settings</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown> */}

            {/* <Dropdown item text="Track">
            <Dropdown.Menu>
                <Dropdown.Item>Add Clip</Dropdown.Item>
                <Dropdown.Item>Add Channel</Dropdown.Item>
                <Dropdown.Item>Load</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown> */}

            <Menu.Item
            name="Help"
            as={NavLink}
            to="https://github.com/xLeDocteurx/REACT---Black-Beat"
            // activeClassName="active"
            target="_BLANK"
            // position="right"
            // active={activeItem === "Help"}
            onClick={this.handleItemClick}
            />

            {/* <Menu.Item 
            // className="centered" 
                header>{this.state.currentProject.title}
            </Menu.Item> */}
            <Menu.Menu
            position="right"
            >
                <Dropdown
                item
                text={'this.props.user.username'}
                >
                    <Dropdown.Menu>
                        <Dropdown.Item
                        text="Profile"
                        as={NavLink}
                        to="/profile"
                        // activeClassName="active"
                        />
                        <Dropdown.Item
                        text="Log Out"
                        as={NavLink}
                        to="/logout"
                        // activeClassName="active"
                        />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Menu>


        </Menu>
        )
    }
}
