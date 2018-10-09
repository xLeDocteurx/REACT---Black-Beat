import React, { Component } from "react";
import { User, Track } from "../Interfaces.ts";

class Track extends Component {
    
    constructor (props) {
        super(props)

        this.state = {
            // title: '',
            // about: ''
        }
    }

    // handleChange = (e, { name, value }) => this.setState({ [name]: value })

    // handleSubmit = () => {
    //     const { title, about } = this.state

    //     this.setState({ submittedTitle: title, submittedAbout: about })

    //     // DB.newProject();
    // }

}

export default class DrumTrack extends Track {

}

class MidiTrack extends Track {

}

class AudioTrack extends Track {

}

class AudioInputTrack extends Track {
    
}