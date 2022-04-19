import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import DraggingElement from "../../functions/DraggingElement";
import { elseProducts } from "../../mocks/mocks";

export default function AddPersonBlock({ columns, setColumns }) {
  const [name, setName] = useState("");

  const decrement = (item, columnId) => {
    const thisColumn = columns[columnId];
    const thisItems = [...thisColumn.items];
    thisItems.splice(
      thisItems.findIndex((obj) => obj.id === item.id),
      1
    );

    setColumns({
      ...columns,
      [columnId]: {
        ...thisColumn,
        items: thisItems,
      },
    });
  };

  const incrementPerson = () => {
    setColumns({
      ...columns,
      [uuid()]: {
        name: name,
        type: "person",
        items: [],
      },
    });
    setName("");
  };

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", height: "100%" }}
      >
        <div>
          <input
            type="text"
            className="input"
            placeholder="person name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          {/* <label>name</label>
      <input type="text" className="input" /> */}
          <button className="button" onClick={incrementPerson}>
            add
          </button>
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", height: "100%" }}
      >
        {/* <div className="Pictures">
          {elseProducts.map((item) => {
            return <DraggingElement item={item} id={item.id} />;
          })}
        </div> */}
      </div>
    </>
  );
}
