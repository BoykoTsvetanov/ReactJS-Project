import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home(props) {
  const user = localStorage.getItem("user");

  return (
    <div className="hero-container">
      {user ? (
        <section id="viewCatalog" className="background-img">
          <div className="added-destinations">
            <Link className="added" to="/details">
              <img src="" className="picture-added" />
              <h3>Destinations</h3>
              <span city></span>
              <span>departureDate</span>
            </Link>
          </div>
        </section>
      ) : (
        <div className="container-hero">
          <h1>Adventure</h1>

          <Link className="myButton" to="/register">
            Join Us
          </Link>
        </div>
      )}
    </div>
  );
}

export default Home;
