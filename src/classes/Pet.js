import React, { Component } from "react";
import DraggingElement from "../functions/DraggingElement";
import "../App.css";

//make animal as a board but with food and products

class Pet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type,
      pet: props.pet,
    };
  }

  add = () => {
    this.setState({
      cart: ["ice cream"],
      total: this.state.total + 5,
    });
  };

  render() {
    return (
      <div className="listElement">
        <DraggingElement id={this.state.pet.id} text={this.state.pet.category}>
          <div>{this.state.pet.subCategory}</div>
        </DraggingElement>
      </div>
    );
  }
}

export default Pet;
