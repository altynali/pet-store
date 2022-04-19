import React, { useState } from "react";
import { v4 as uuid } from "uuid";

export default function AddPersonBlock({ columns, setColumns }) {
  const [name, setName] = useState("");

  const decrement = (item, columnId) => {
    setColumns({});
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
      {/* <div
        style={{ display: "flex", justifyContent: "center", height: "100%" }}
      >
        <div className="Pictures">
          {elseProducts.map((item) => {
            return (
              <DraggingElement key={item.id} id={item.id}>
                {item.content}
              </DraggingElement>
            );
          })}
        </div>
      </div> */}
    </>
  );
}
