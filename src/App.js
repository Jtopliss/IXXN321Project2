import React from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import About from "./pages/js/About";
import TableBooking from "./pages/js/TableBooking";
import Menu from "./pages/js/Menu";
import Nav from "./components/js/Nav";
import Logo from "./Logo.png";
import Home from "./Home";


function App() {
  return (
    <div className="Main-nav">
    <div className="App"></div>
   <img src={Logo} alt="logo" />
    <Router>
      <Nav />
      <Route path="/Home" component={Home} exact/>
      <Route path="/Menu" component={Menu} exact/>
      <Route path="/About" component={About} exact/>
      <Route path="/TableBooking" component={TableBooking} exact/>
    </Router>
    <div className="Footer">
    <p>Jared Topliss © 2020 All Rights Reserve</p>
    </div>
    </div>

  );
}
export default App;