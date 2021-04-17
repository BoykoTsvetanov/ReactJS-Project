import React, { useState, useContext } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import AuthContext from "../../context/Auth";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const { username } = useContext(AuthContext);

  return (
    <nav className="navbar">
      {username ? (
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Travel Around The World
          </Link>
          <div className="menu-icon" onClick={handleClick}></div>
          <ul className={"nav-menu active"}>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/destinations" className="nav-links">
                Add Destination
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
          <h1 className="welcome">Welcome, {username}</h1>
        </div>
      ) : (
        <div className="navbar-container2">
          <Link to="/" className="navbar-logo">
            Travel Around The World
          </Link>
          <div className="menu-icon" onClick={handleClick}></div>
          <ul className={"nav-menu active"}>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/register" className="nav-links">
                Register
              </Link>
            </li>
          </ul>
          {<Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
