import React, { useState } from "react";
import { useDrop } from "react-dnd";
import "../App.css";
import DraggingElement from "./DraggingElement";

function Board({ elementsMock }) {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const items = elementsMock.filter((element) => id === element.id);
    setBoard((board) => [...board, items[0]]);
  };

  return (
    <div className="board" ref={drop}>
      {board.map((item) => {
        return (
          <div id={item.id} text={item.category}>
            <div>
              {item.subCategory}
              {item.category !== "product" && (
                <input type="text" placeholder="name me" />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Board;
