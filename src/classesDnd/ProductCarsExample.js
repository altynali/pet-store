import React, { Component } from "react";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carts: [],
      total: 0,
    };
  }

  add = () => {
    this.setState({
      cart: ["ice cream"],
      total: this.state.total + 5,
    });
  };

  currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  getTotal = () => {
    return this.state.total.toLocaleString(undefined, this.currencyOptions);
  };

  render() {
    return (
      <div className="wrapper">
        <div>Shopping Cart: {this.state.carts.length} total items.</div>
        <div>Total {this.getTotal()}</div>

        <div className="product">
          <span role="img" aria-label="ice cream">
            🍦
          </span>
        </div>
        <button onClick={this.add}>Add</button>
        <button>Remove</button>
      </div>
    );
  }
}
