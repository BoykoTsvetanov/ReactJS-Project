import "./Destinations.css";
import { Link } from "react-router-dom";
const Destinations = ({ city, description, destination, imgUrl, id }) => {
  return (
    <div className="dest">
      <h3 className="destination">{destination}</h3>
      <span>{city}</span>
      <p className="img">
        <img src={imgUrl} alt="" />
      </p>
      <p className="description">{description}</p>
      <div className="dest-info">
        <Link to={`/details/${id}`}>
          <button className="destBtn">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Destinations;
