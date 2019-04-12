import React, { Component } from "react";
import "./App.css";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const newSmurf = { ...this.state, age: Number(this.state.age) };
    // add code to create the smurf using the api
    this.props.submit(newSmurf);

    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <h1>Add A Smurf</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChanges}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            type="number"
            onChange={this.handleChanges}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleChanges}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button className="btn">Add smurf to our village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
