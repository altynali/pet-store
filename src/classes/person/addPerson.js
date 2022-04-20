import React, { useState } from "react";
import { v4 as uuid } from "uuid";

export default function AddPersonBlock({ columns, setColumns }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const incrementPerson = () => {
    setColumns({
      ...columns,
      [uuid()]: {
        name: name,
        email: email,
        type: "person",
        items: [],
      },
    });
    setName("");
    setEmail("");
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
          <input
            type="text"
            className="input"
            placeholder="person email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <button className="button" onClick={incrementPerson}>
            add
          </button>
        </div>
      </div>
    </>
  );
}
