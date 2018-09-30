import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

// Les classes
// import DB from './classes/DB.js';
// Les parts de  l'application
import Header from './components/parts/Header';

import firebase from 'firebase';



// import logo from './logo.svg';
import './App.css';
import DB from './classes/DB';



// // Set the configuration for your app
// // TODO: Replace with your project's config object
// var config = {
//   apiKey: 'AIzaSyCsuE_9emoXR1Y-UOBfoNhnWSxBhdh_UbE',
//   authDomain: 'abits-25c1c.firebaseapp.com',
//   databaseURL: 'https://abits-25c1c.firebaseio.com',
//   storageBucket: 'abits-25c1c.appspot.com'
// };
// firebase.initializeApp(config);

// // Get a reference to the storage service, which is used to create references in your storage bucket
// var storage = firebase.storage();
// var storageRef = firebase.storage().ref();

// var firestore = firebase.firestore();


//-----??????-------//
// firebase.storage().ref().orderByChild('urlfile').on('value', function(snapshot) {
//     snapshot.forEach(function(child) {
//       console.log('?????????????????');
//       console.log(child);
//       console.log('?????????????????');
//     })
// });
import projects from "./json/projects.json";

class App extends Component {

  state = { 
    projects: projects.projects,
    currentProject: projects.projects[0],
    // currentProject: {id:0, title: 'this is were we start', about: 'xxx'} 
  }

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     // storage: storage,
  //     // storageRef: storageRef,
  //     // // firestore: firestore,

  //     currentProject: {id:0, title: 'this is were we start', about: 'xxx'}
  //   };
  // }

  render() {
    return (
      <div>
        {/* <DB/> */}
        <Header 
        projects={this.state.projects} 
        currentProject={this.state.currentProject}
        />
        {/* <AddImageModal images={this.state.images}/>
        <Container>
          <Carousel images={this.state.images}/>
        </Container> */}
      </div>
    );
  }
}

export default App;
