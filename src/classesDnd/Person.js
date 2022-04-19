import React, { Component } from "react";
import "../App.css";
import Board from "../functions/Board";

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elementsMock: props.elementsMock,
    };
  }

  render() {
    return (
      <div className="">
        person name
        <Board elementsMock={this.state.elementsMock} />
      </div>
    );
  }
}

export default Person;
