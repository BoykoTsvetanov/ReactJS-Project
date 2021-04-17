import "./Destinations.css";
import { Link } from "react-router-dom";
const Destinations = ({ city, description, destination, imgUrl, id }) => {
  return (
    <div className="destin">
      <img src={imgUrl} alt="" />
      <h3>Destination: {destination}</h3>
      <p>City: {city}</p>

      <p>Description: {description}</p>
      <div className="dest-info">
        <Link to={`/details/${id}`}>
          <button className="destBtn">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Destinations;
