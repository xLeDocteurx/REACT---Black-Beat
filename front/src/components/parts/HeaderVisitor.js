import React, { Component } from "react"
import { 
    // Image, Dropdown,
    Menu, 
    // Divider
    } from "semantic-ui-react"

// import NewModal from "../modals/NewModal"
// import LoadModal from "../modals/LoadModal"

import './Header.css'

export default class MenuExampleHeader extends Component {

    // state = {}

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
                    as="a"
                    href="/register"
                    >
                    Register
                    </Menu.Item>
                    <Menu.Item
                    as="a"
                    href="/login"
                    >
                    Log In
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}
