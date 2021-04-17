import { Component, useContext } from "react";
import { Link } from "react-router-dom";
import { getAll } from "../../models/destinations";
import Destinations from "../Destinations/Destinatons";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destinations: [],
    };
  }

  componentDidMount() {
    getAll()
      .then((res) => {
        const destinations = res.docs.map(
          (dest) => (dest = { ...dest.data(), id: dest.id })
        );
        this.setState({ destinations: destinations });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const user = localStorage.getItem("user");

    return (
      <div className="hero-containers">
        {user ? (
          <div className="background-img">
            <ul>
              <li>
                {" "}
                {this.state.destinations.map((x) => (
                  <Destinations
                    key={x.id}
                    city={x.city}
                    description={x.description}
                    destination={x.destination}
                    imgUrl={x.imgUrl}
                    id={x.id}
                  />
                ))}
              </li>
            </ul>
          </div>
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
}

export default Home;
