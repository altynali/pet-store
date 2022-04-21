import React, { useState } from "react";
import "../App.css";
import Board from "./board/Board";
import { v4 as uuid } from "uuid";

/**
 *
 * Class represents products list.
 *
 * @class Product
 * @extends Board
 *
 * @property {string} name - name of product, that going to be added
 * @property {function} setName - name setter
 * @property {string} price - price of product, that going to be added
 * @property {function} setPrice - price setter
 * @property {function} increment - method for increment products
 * @property {function} decrement - method for decrement  products
 *
 * @returns html: product list
 *
 */

function Product({ column, columnId, columns, setColumns }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const increment = () => {
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
      columns={columns}
      setColumns={setColumns}
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
        <button className="button" onClick={increment}>
          add
        </button>
      </div>
    </Board>
  );
}

export default Product;
