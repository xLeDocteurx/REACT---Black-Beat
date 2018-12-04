import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import { 
    // Image, Dropdown,
    Menu, 
    // Divider
    } from "semantic-ui-react"

// import NewModal from "../modals/NewModal"
// import LoadModal from "../modals/LoadModal"

import './Header.css'

export default class MenuExampleHeader extends Component {

    constructor (props) {
        super(props)

        this.state = {
            isLoggedIn: false
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
                <Menu.Menu
                position="right"
                >
                    <Menu.Item
                    as={NavLink}
                    to="/register"
                    activeClassName="active"
                    >
                    Register
                    </Menu.Item>
                    <Menu.Item
                    as={NavLink}
                    to="/login"
                    activeClassName="active"
                    >
                    Log In
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}
