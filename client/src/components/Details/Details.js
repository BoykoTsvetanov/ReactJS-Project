import React, { useEffect, useState } from "react";
import { get, dlt } from "../../models/destinations";
import { Link } from "react-router-dom";

import "./Details.css";
const Details = ({ match, history }) => {
  const destId = match.params.destId;

  const [dest, setDest] = useState({});
  const [isCreator, setCreator] = useState("");

  useEffect(() => {
    get(destId).then((res) => {
      const destination = { ...res.data(), id: res.id };
      const creatorIs = destination.creator == localStorage.getItem("user");

      setDest(destination);
      setCreator(creatorIs);
    });
  }, []);
  const handleDelete = (e) => {
    e.preventDefault();
    dlt(destId)
      .then((res) => {
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="dest-details">
      <h1 className="destination">{dest.destination}</h1>

      <div className="info">
        <img src={dest.imgUrl} />
        <div className="city">{dest.city}</div>
        <div className="description">
          {dest.description}
          <br />
          <br />
        </div>
      </div>
      {isCreator ? (
        <div className="buttons">
          <Link to={`/edit/${destId}`}>Edit</Link>
          <Link to={`/delete/${destId}`} onClick={handleDelete}>
            Delete
          </Link>
        </div>
      ) : (
        <div className="notCreator">
          <h1>I Was Here</h1>
        </div>
      )}
    </div>
  );
};

export default Details;
