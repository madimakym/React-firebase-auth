import React, { Component } from "react"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import {Redirect} from 'react-router-dom';

class Login extends Component {
  state = { 
    isSignedIn: false,
    fullName: '',
    role: '',
    redirect: false
  }
  
    // Api connection 
        uiConfig = {
            signInFlow: "popup",
            signInOptions: [
            {
                provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                // provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                // provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                // provider: firebase.auth.TwitterAuthProvider.PROVIDER_ID,
                // provider: firebase.auth.GithubAuthProvider.PROVIDER_ID,
                // provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,

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
        var idUser = user.uid;
        sessionStorage.setItem('uid',JSON.stringify(idUser));
        this.setState({
            redirect: true,
            // isSignedIn: !!user
        });
   
      
    })
  }

  _signOut(){
      firebase.auth().signOut()
  }

  render() {

    if(this.state.redirect){
        return (<Redirect to={'/home'}/>)
    } 
    
    if(sessionStorage.getItem("uid")){
        return (<Redirect to={'/home'}/>)
    } 

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

export default Login
