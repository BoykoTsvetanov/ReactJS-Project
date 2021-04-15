import { dlt } from "../../models/destinations";
const DeleteDestinations = (id, redirect) => {
  dlt(id)
    .then((res) => {
      return redirect;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default DeleteDestinations;
