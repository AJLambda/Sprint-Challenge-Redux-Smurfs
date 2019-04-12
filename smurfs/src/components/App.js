import React, { Component } from "react";
import "./App.css";

import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";

import { addSmurf } from "../actions";

import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>
          <SmurfList smurfs={this.props.smurfs} />
        </div>
        <div>
          <SmurfForm submit={this.props.addSmurf} />
        </div>
      </div>
    );
  }
}
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { addSmurf }
)(App);
