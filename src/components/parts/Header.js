import React, { Component } from "react";
// import { Menu } from "semantic-ui-react";
import { Image, Divider, Dropdown, Menu } from "semantic-ui-react";
import NewModal from "../elements/NewModal";
import LoadModal from "../elements/LoadModal";

export default class MenuExampleHeader extends Component {

    state = {};

    // constructor (props) {
    //     super(props)

    //     this.state = {}
    // }
    


    // handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        // const { activeItem } = this.state;
        // let saveProjects = DB.saveProjects();

        return (
        <Menu attached="top">
            {/* <Menu inverted> */}
            <Dropdown item text="File">
                <Dropdown.Menu>
                    
                    <NewModal />
                    <Dropdown.Item 
                        // as='button'
                        // onClick={DB.saveProjects()}
                    >Save</Dropdown.Item>

                    <LoadModal projects={this.props.projects}/>
                    {/* <Dropdown.Item>Load</Dropdown.Item> */}
                    <Dropdown.Divider />
                    <Dropdown.Header>Export</Dropdown.Header>
                    <Dropdown.Item>Share</Dropdown.Item>
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
            as="a"
            href="https://github.com/xLeDocteurx/REACT---Black-Beat"
            target="_BLANK"
            // position="right"
            // active={activeItem === "Help"}
            onClick={this.handleItemClick}
            />

            {/* <Menu.Item 
            // className="centered" 
                header>Current Project : {this.props.currentProject.title}
            </Menu.Item> */}

            <Menu.Item
            as="a"
            href="#"
            // onClick=""
            position="right">
                <Image src="./autop.jpg" alt="Company Logo" avatar />
                <span>Username</span>
            </Menu.Item>
        </Menu>
        );
    }
}
