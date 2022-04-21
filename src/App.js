import React, { Component } from "react";
import "./App.css";
import Cash from "./classes/Cash";
import Store from "./Store";
import { stores } from "./mocks/mocks";

class App extends Component {
  constructor() {
    super();

    this.state = {
      cash: 0,
      stores: stores,
    };

    this.setCash = (cash) => {
      this.setState((prevState) => ({
        ...this.state,
        cash: prevState.cash + cash,
      }));
    };
  }

  render() {
    return (
      <>
        <Cash
          cash={this.state.cash}
          text="Cash in all stores:"
          styles={{
            display: "flex",
            justifyContent: "center",
            border: "1px solid",
            marginBottom: 60,
          }}
        />
        {this.state.stores.map((storeColumn, i) => (
          <Store
            key={i}
            index={i}
            cash={this.state.cash}
            setCash={this.setCash}
            columns={storeColumn}
          />
        ))}
      </>
    );
  }
}

export default App;
