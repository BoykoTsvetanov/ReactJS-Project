import React, { useEffect, useState } from "react";
import { get, editData } from "../../models/destinations";

const EditDestinations = ({ match, history }) => {
  const destId = match.params.destId;

  const [dest, setDest] = useState({});

  useEffect(() => {
    get(destId).then((res) => {
      const destination = { ...res.data(), id: res.id };

      setDest(destination);
    });
  }, []);

  const onSubmitEditHandler = (e) => {
    e.preventDefault();
    const destination = e.target.description.value;
    const city = e.target.city.value;
    const imgUrl = e.target.imgUrl.value;
    const description = e.target.description.value;

    editData(destId, {
      destination,
      city,
      imgUrl,
      description,
    }).then((res) => {
      history.push(`/details/${destId}`);
    });
  };

  return (
    <section className="edit-destination">
      <form onSubmit={onSubmitEditHandler}>
        <label>Destination name:</label>
        <input
          type="text"
          name="destination"
          defaultValue={dest.destination}
          placeholder="Destination name"
        />
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          defaultValue={dest.city}
          name="city"
          placeholder="City"
        />
        <label htmlFor="imgUrl">Image:</label>
        <input
          type="text"
          name="imgUrl"
          defaultValue={dest.imgUrl}
          placeholder="https://"
        />
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          name="description"
          defaultValue={dest.description}
          placeholder="Description"
        />
        <input type="submit" className="create" value="Add" />
      </form>
    </section>
  );
};

export default EditDestinations;
