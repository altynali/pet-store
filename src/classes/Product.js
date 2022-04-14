import React, { Component } from "react";
import Picture from "./Picture";
import "../App.css";
import Board from "./Board";
import { pictureList } from "./mocks";

class Product extends Component {
  render() {
    return (
      <>
        <div className="Pictures">
          {pictureList.map((picture) => {
            return (
              <Picture key={picture.id} url={picture.url} id={picture.id} />
            );
          })}
        </div>
      </>
    );
  }
}

export class Dog extends Animal {
  render() {
    return (
      <>
        <div className="Pictures">
          {pictureList.map((picture) => {
            return (
              <Picture key={picture.id} id={picture.id} text={picture.text} />
            );
          })}
        </div>
      </>
    );
  }
}

export default Product;
