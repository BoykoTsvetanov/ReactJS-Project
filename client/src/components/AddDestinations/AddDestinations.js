import React from "react";
import "./AddDestinations.css";
import { createData } from "../../models/destinations";

const AddDestination = ({ history }) => {
  const onSubmitDestinationsHandler = (e) => {
    e.preventDefault();
    const creator = localStorage.getItem("user");
    const destination = e.target.destination.value;
    const city = e.target.city.value;
    const imgUrl = e.target.imgUrl.value;
    const description = e.target.description.value;

    createData({
      destination,
      city,
      imgUrl,
      description,
      creator,
    })
      .then((res) => {
        console.log("uspeshno");
      })
      .catch((err) => console.log(err));

    history.push("/");
  };

  return (
    <section className="added-destination">
      <form onSubmit={onSubmitDestinationsHandler}>
        <label>Destination name:</label>
        <input type="text" name="destination" placeholder="Destination name" />
        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" placeholder="City" />
        <label htmlFor="imgUrl">Image:</label>
        <input type="text" name="imgUrl" placeholder="https://" />
        <label htmlFor="description">Description: </label>
        <input type="text" name="description" placeholder="Description" />
        <input type="submit" className="create" value="Add" />
      </form>
    </section>
  );
};
export default AddDestination;
