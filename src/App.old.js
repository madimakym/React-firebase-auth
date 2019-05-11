import React, { Component } from 'react';
// import * as firebase from 'firebase';
// import scripts from './scripts';


class App extends Component {

  componentDidMount(){
    // this.print();

    // const element = <p id="phone"></p>;
    // console.log('#', element)

  }


  print = () => {
    var object = this.refs.phone;  
    console.log('#', object)
  }

  componentWillMount(){
    if(sessionStorage.getItem("uid")){
      var x = sessionStorage.getItem("uid");
    console.log("Call User Feed", x)
    } else {
      this.setState({redirect:true})
    }
  }

  render() {
 
    return (
      <div className="App">
        <div id="container">
          <h3>Authentication via Phone number</h3>
          <div id="loading">Loading...</div>
          <div id="loaded" class="hidden">
            <div id="main">
              <div id="user-signed-in" class="hidden">
                  
                  <p id="phone"></p>
                <p>
                  <button id="sign-out">Sign Out</button>
                </p>
              </div>
              <div id="user-signed-out" class="hidden">
                <div id="firebaseui-spa">
                ss
                  <h3>App:</h3>
                  <div id="firebaseui-container"></div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    );
  }
}

export default App;