import React from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import About from "./pages/js/About";
import TableBooking from "./pages/js/TableBooking";
import Menu from "./pages/js/Menu";
import Nav from "./components/js/Nav";
import Logo from "./Logo.png";
import Slideshow from "./components/js/Slideshow";


function App() {
  return (
    <div className="Main-nav">
    <div className="App"></div>
    <h1>Jareds Restruant</h1>
    <img src={Logo} alt="logo" />
    <Router> 
      <Nav />
      <Route path="/Menu" component={Menu} exact/>
      <Route path="/About" component={About} exact/>
      <Route path="/TableBooking" component={TableBooking} exact/>
   
      <Slideshow />
      <Route path="/Slideshow" component={Slideshow} exact/>

    </Router>
    </div>
  );
}
export default App;