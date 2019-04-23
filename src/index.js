import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

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
import App from './App';

var history = createBrowserHistory();


ReactDOM.render(<App />, document.getElementById('root'));
