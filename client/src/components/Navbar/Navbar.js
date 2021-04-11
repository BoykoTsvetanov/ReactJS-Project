import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TRVL
          </Link>
          <div className="menu-icon" onClick={handleClick}></div>
          <ul className={"nav-menu active"}>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/logout" className="nav-links">
                logout
              </Link>
            </li>

            <li>
              <Link to="/register" className="nav-links-mobile">
                Sign Up
              </Link>
            </li>
          </ul>
          {<Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
