import React, { Component } from "react";
import { get, editData } from "../../models/destinations";

class EditDestinations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destination: "",
      description: "",
      city: "",
      imgUrl: "",
      errors: {
        destination: "",
        description: "",
        city: "",
        imgUrl: "",
      },
    };

    get(props.match.params.destId).then((res) => {
      this.setState({
        destination: res.destination,
        city: res.city,
        imgUrl: res.imgUrl,
        description: res.description,
      });
    });

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onSubmitEditHandler(e) {
    e.preventDefault();
    let passed = true;

    if (!this.state.destination) {
      this.setState((state) => ({
        errors: { ...state.errors, destination: "The field connot be empty!" },
      }));
      passed = false;
    } else {
      this.setState((state) => ({
        errors: { ...state.errors, destination: "" },
      }));
    }

    if (!this.state.description) {
      this.setState((state) => ({
        errors: {
          ...state.errors,
          description: "The destination must have a description!",
        },
      }));
      passed = false;
    } else {
      this.setState((state) => ({
        errors: { ...state.errors, description: "" },
      }));
    }

    if (
      !(
        this.state.imgUrl.includes("http://") ||
        this.state.imgUrl.includes("https://")
      )
    ) {
      this.setState((state) => ({
        errors: { ...state.errors, imgUrl: "URL is invalid!" },
      }));
      passed = false;
    } else {
      this.setState((state) => ({ errors: { ...state.errors, imgUrl: "" } }));
    }
    if (!this.state.city) {
      this.setState((state) => ({
        errors: { ...state.errors, city: "The field connot be empty!" },
      }));
      passed = false;
    } else {
      this.setState((state) => ({
        errors: { ...state.errors, city: "" },
      }));
    }
    if (passed) {
      editData(this.props.match.params.destId, {
        destination: this.state.destination,
        description: this.state.description,
        imgUrl: this.state.imgUrl,
        city: this.state.city,
      })
        .then((res) => {
          this.props.history.push(`/details/${this.props.match.params.destId}`);
        })
        .catch((err) => console.log(err));
    }
  }
  onChangeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <section className="edit-destination">
        <form>
          <label>Destination name:</label>
          <input
            type="text"
            name="destination"
            placeholder="Destination name"
            onChange={this.onChangeHandler}
            value={this.state.destination}
          />
          {this.state.errors.destination && (
            <p>{this.state.errors.destination}</p>
          )}
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City"
            onChange={this.onChangeHandler}
            value={this.state.city}
          />
          {this.state.errors.city && <p>{this.state.errors.city}</p>}
          <label htmlFor="imgUrl">Image:</label>
          <input
            type="text"
            name="imgUrl"
            placeholder="https://"
            onChange={this.onChangeHandler}
            value={this.state.imgUrl}
          />
          {this.state.errors.imgUrl && <p>{this.state.errors.imgUrl}</p>}
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={this.onChangeHandler}
            value={this.state.description}
          />
          {this.state.errors.description && (
            <p>{this.state.errors.description}</p>
          )}
          <input
            type="submit"
            className="edit"
            value="Edit"
            onClick={this.onSubmitEditHandler.bind(this)}
          />
        </form>
      </section>
    );
  }
}

export default EditDestinations;
