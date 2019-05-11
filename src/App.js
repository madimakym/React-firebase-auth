import React, { Component } from 'react';
import Routes from './Components/routes';
import * as firebase from 'firebase';

// Initialize Firebase
  firebase.initializeApp({
  apiKey: "AIzaSyCgeHyXzpPdCzI9Qgqs6igEavuvKS0mCBI",
  authDomain: "todolist-18d74.firebaseapp.com",
  databaseURL: "https://todolist-18d74.firebaseio.com",
  projectId: "todolist-18d74",
  storageBucket: "todolist-18d74.appspot.com",
  messagingSenderId: "702554468899",
  appId: "1:702554468899:web:178fa68b56fdeeda"
})

class App extends Component {
  render() {
    return (
      <div className="App">
         <Routes/>
      </div>
    );
  }
}

export default App;
