import React, { Component } from 'react'

class LogOut extends Component {

    componentWillMount() {
        sessionStorage.clear()
        // window.location.replace("/login")
        window.location.replace("/welcome")
    }
}

export default LogOut