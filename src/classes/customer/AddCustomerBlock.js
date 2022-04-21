import React, { useState } from "react";
import { v4 as uuid } from "uuid";

/**
 *
 * Block for adding person.
 *
 * @class AddCustomerBlock
 *
 * @param {Array<Object>} columns - columns (products list and customers)
 * @param {function} setColumns -  setter for store's columns
 *
 * @property {string} name - name of person, that going to be added
 * @property {function} setName - name setter
 * @property {string} email - email of person, that going to be added
 * @property {function} setEmail - email setter
 * @property {function} increment - method for increment person
 *
 * @returns html
 *
 */

export default function AddCustomerBlock({ columns, setColumns }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const increment = () => {
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
          <button className="button" onClick={increment}>
            add
          </button>
        </div>
      </div>
    </>
  );
}
