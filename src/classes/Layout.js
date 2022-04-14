import React, { Component } from "react";
import "../App.css";
import Board from "./Board";
import { pictureList } from "./mocks";
import Animal, { Dog } from "./Animal";

class Layout extends Component {
  render() {
    return (
      <>
        <div className="animals">
          <Animal type="dog" />
        </div>
        <div className="boards">
          <Board pictureList={pictureList} />
          <Board pictureList={pictureList} />
        </div>
      </>
    );
  }
}

export default Layout;
