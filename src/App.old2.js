import React, { Component } from "react"
import "./App.css"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

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
  state = { 
    isSignedIn: false,
    fullName: '',
    role: '',
  }
  
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      {
        provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        recaptchaParameters: {
          type: 'image', 
          size: 'invisible',
          badge: 'bottomleft' 
        },
          defaultCountry: 'SN', 
          defaultNationalNumber: '784336027',
          loginHint: '+11234567890'
      }
    ],
    callbacks: {
      signInSuccess: () => false
    }
}

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      var idUser = user.uid;

      firebase.database().ref('users/' + idUser).once('value')
        .then((snapshot) => {
          const userObj = snapshot.val();
          this.setState ({
            fullName: userObj.FullName,
            role: userObj.Role,
          })    
      });
      
    })
  }

  _signOut(){
      firebase.auth().signOut()
  }

  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button onClick={() => this._signOut()}>Sign out!</button>
            <h1>Name: {this.state.fullName}</h1>
            <h1>Role: {this.state.role}</h1>
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    )
  }
}

export default App
