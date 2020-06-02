import React from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";
import Logo from "./Logo.png";
import Slideshow from "./components/js/Slideshow"
import Nav from "./components/js/Nav";

export default function Home () {
    return (
        <div className="Main-nav">
        <h1>Jareds Restaurant</h1>
        <img src={Logo} alt="logo" />  
    
        <Nav></Nav>
    <Router> 
      <Slideshow />
      <Route path="/Slideshow" component={Slideshow} exact/>


    </Router>  
        </div>
    )
}
