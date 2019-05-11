import React from 'react';
import {BrowserRouter,  Route, Redirect, Switch} from 'react-router-dom';
import Login from './login'
// import Register from './register'
import Home from './home'

const Routes = () => (
    <BrowserRouter >
        <Switch>
            <Route exact path="/login" component={Login}/>
            <Route path="/home" component={Home}/> 
        </Switch>
    </BrowserRouter>
  );
  
  export default Routes;