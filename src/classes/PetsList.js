import React, { useState } from "react";
import "../App.css";
import Person from "./person/Person";
import { v4 as uuid } from "uuid";

function PetsList({ column, columnId, decrement, type, columns, setColumns }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const incrementPet = () => {
    const thisItems = [...column.items];

    thisItems.push({ id: uuid(), content: name, price: price, type: "pet" });

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
        <button className="button" onClick={incrementPet}>
          add
        </button>
      </div>
    </Person>
  );
}

export default PetsList;
