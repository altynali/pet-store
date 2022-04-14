import React, { Component } from "react";
import Picture from "./Picture";
import "../App.css";
import { pictureList } from "./mocks";

//make animal as a board but with food and products

class Animal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type,
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

  render() {
    return (
      <>
        <div className="Pictures">{this.state.type === "dog" && <Dog />}</div>
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
              <div key={picture.id} onClick={() => alert(this.state.total)}>
                <Picture
                  url={picture.url}
                  id={picture.id}
                  text={picture.text}
                />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Animal;
