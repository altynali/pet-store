import React, { useState } from "react";
import "../App.css";
import Person from "./person/Person";
import { v4 as uuid } from "uuid";
import DraggingElement from "../functions/DraggingElement";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

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
      price: price,
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

  return (
    <Person
      column={column}
      columnId={columnId}
      type={column.type}
      decrement={decrement}
    >
      <div style={{ width: "80%" }}>
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
          onChange={(e) => setPrice(e.target.value)}
        />
        <button className="button" onClick={incrementProduct}>
          add
        </button>
      </div>
    </Person>
  );
}

export default ProductsList;
