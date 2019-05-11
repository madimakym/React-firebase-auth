import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import firebase from "firebase"


class Home extends Component {
    state = { 
        isSignedIn: false,
        fullName: '',
        role: '',
        redirect: false
      }
    
    componentWillMount(){
        if(sessionStorage.getItem("uid")){
        var idUser = JSON.parse(sessionStorage.getItem("uid")); //suppression double quotes
        
        console.log(idUser);
        // recupere info user
        firebase.database().ref('users/' + idUser).once('value')
            .then((snapshot) => {
            const userObj = snapshot.val();
            this.setState ({
                fullName: userObj.FullName,
                role: userObj.Role,
            })    
        });
        } else {
        this.setState({redirect:true})
        }
    }

    logout(){
        sessionStorage.setItem("uid", '');
        sessionStorage.clear();
        firebase.auth().signOut()
        // this.history.push('/login');
        // this.setState({redirect:true})
    }
    

    render() {
        if(this.state.redirect){
            return (<Redirect to={'/login'}/>)
        } 
      
        return (
            <div>
                <h1>Home</h1>
                <p>Name: {this.state.fullName}</p>
                <p>Role: {this.state.role}</p>
                <button type="button" onClick={this.logout}>Logout</button>
            </div>
        );
    }
}

export default Home;
