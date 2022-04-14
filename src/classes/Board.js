import React, { useState } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import "../App.css";
import Product from "./ProductCarsExample";

function Board({ pictureList }) {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictures = pictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board, pictures[0]]);
  };

  return (
    <div className="Board" ref={drop}>
      {/* <Product /> */}
      {board.map((picture) => {
        return (
          <Picture url={picture?.url} id={picture.id} text={picture.text} />
        );
      })}
    </div>
  );
}

export default Board;
