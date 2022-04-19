import React, { useState } from "react";
import "../App.css";
import Board from "./person/Board";
import { v4 as uuid } from "uuid";

function ProductsList({
  column,
  columnId,
  decrement,
  type,
  columns,
  setColumns,
}) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const incrementProduct = () => {
    const thisItems = [...column.items];

    thisItems.push({
      id: uuid(),
      content: name,
      price: parseInt(price),
      type: "product",
    });

    setColumns({
      ...columns,
      [columnId]: {
        ...column,
        items: [...thisItems],
      },
    });

    setName("");
    setPrice("");
  };

  const handlePrice = (value) => {
    const numValue = parseInt(value);
    setPrice(numValue);
  };

  return (
    <Board
      column={column}
      columnId={columnId}
      type={column.type}
      decrement={decrement}
    >
      <div>
        <input
          type="text"
          className="input"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="input"
          placeholder="price"
          value={price}
          onChange={(e) => handlePrice(e.target.value)}
        />
        <button className="button" onClick={incrementProduct}>
          add
        </button>
      </div>
    </Board>
  );
}

export default ProductsList;
