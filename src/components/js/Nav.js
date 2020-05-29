import React from 'react';
import { Link } from "react-router-dom";
import "../css/Nav.css";

export default function Nav() {
    return (
        <div ClassName="Main-nav">
        <Link to="/App" style={{ textDecoration: 'none' }}className="nav-link">Home</Link>
        <Link to="/Menu" style={{ textDecoration: 'none' }}className="nav-link1">Our Menu</Link>
        <Link to="/About" style={{ textDecoration: 'none' }}className="nav-link2">About Us</Link>
        <Link to="/TableBooking" style={{ textDecoration: 'none' }}className="nav-link3">Booking</Link>
        </div>
    )
}
