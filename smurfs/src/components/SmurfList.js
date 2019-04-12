import React, { Component } from "react";
import { getSmurfs } from "../actions";
import { connect } from "react-redux";

import Smurf from "./Smurf";

class SmurfList extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map((smurf, id) => {
            return (
              <Smurf
                key={id}
                smurf={smurf}
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToPops = state => {
  console.log(state);
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToPops,
  { getSmurfs }
)(SmurfList);
