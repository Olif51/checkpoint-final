import React from "react";
import logo from "../assets/logo.webp";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="./assets/pictures/logo.png">
            <img src={logo} alt="logo" />
          </a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">The Royal Family</a>
        </li>
        <li>
          <a href="/">The Kingdom's Royal Assets</a>
        </li>
        <li>
          <a href="/">Events</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
