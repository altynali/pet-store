import React, { Component } from "react";
import DraggingElement from "../functions/DraggingElement";
import "../App.css";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type,
      product: props.pet,
    };
  }

  render() {
    return (
      <div className="listElement">
        <DraggingElement id={this.state.product.id}>
          <div>{this.state.product.subCategory}</div>
        </DraggingElement>
      </div>
    );
  }
}

export default Product;
