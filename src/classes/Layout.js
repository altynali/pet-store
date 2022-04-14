import React, { Component } from "react";
import "../App.css";
import Board from "../functions/Board";
import { petsMock, productsMock } from "./mocks";
import Pet from "./Pet";
import Person from "./Person";
import Product from "./Product";

class Layout extends Component {
  render() {
    return (
      <>
        <div className="animals">
          our products:
          {petsMock.map((pet) => {
            return (
              <div key={pet.id}>
                <Pet pet={pet} type={pet.category} />
              </div>
            );
          })}
          {productsMock.map((product) => {
            return (
              <div key={product.id}>
                <Product pet={product} />
              </div>
            );
          })}
          <button>add product +</button>
        </div>
        <div className="boards">
          <Person elementsMock={[...petsMock, ...productsMock]} />
          <Person elementsMock={[...petsMock, ...productsMock]} />
        </div>
        <button>add person+</button>
      </>
    );
  }
}

export default Layout;
