import React from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import './App';
import Logo from "./Logo.png";
import Slideshow from "./components/js/Slideshow"
import Nav from "./components/js/Nav";

export default function Home () {
    return (
        <div className="Main-nav">
        <div className="App"></div>  
        <img src={Logo} alt="logo" />   
        <h1>Jareds Restruant</h1>
        <Nav></Nav>
    <Router> 
      <Slideshow />
      <Route path="/Slideshow" component={Slideshow} exact/>

    </Router>    
        </div>
    )
}
