import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";

import "assets/scss/material-kit-react.scss?v=1.4.0";

// pages for this product
import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import PropertyDetail from "views/PropertyDetail/PropertyDetailTemplate.jsx";
import PropertyTemplate from "views/PropertyTemplate/PropertyTemplate.jsx";
import SearchPropertyTemplate from "views/PropertyTemplate/SearchPropertyTemplate.jsx";
import AllSearchPropertyTemplate from "views/PropertyTemplate/AllSearchPropertyTemplate.jsx";
import PropertyFirebaseTemplate from "views/PropertyTemplate/Sections/Propfirebasetemplate.jsx";
import RegisterPage from "views/RegisterPage/RegisterPage.jsx";
import firebase from './Firebase';


class Navigation extends Component {
   state = {
    authenticated: false,
  };
  componentDidMount() {
    console.log(this.state.authenticated);
    firebase.auth().onAuthStateChanged((authenticated) => {
      authenticated
        ? this.setState(() => ({
            authenticated: true,
          }))
        : this.setState(() => ({
            authenticated: false,
          }));
      console.log(this.state.authenticated);
    });
  }
  
  render() {

var history = createBrowserHistory();
    return (
      <Router history={history}>
        <div>
          <Switch>
           
      <Route  path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} authenticated={this.state.authenticated} />
      <Route path="/property-template-page" component={PropertyTemplate} />
      <Route path="/property-template-detail-page/:id/:slug" component={PropertyDetail} />
      <Route path="/commercial/:comloc/:compropt" component={SearchPropertyTemplate} />
      <Route path="/residential/:resloc/:respropt" component={SearchPropertyTemplate} />
      <Route path="/propertyfirebase" component={PropertyFirebaseTemplate} />
      <Route path="/register-page" component={RegisterPage} authenticated={this.state.authenticated} />


      <Route path="/" component={LandingPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Navigation;
