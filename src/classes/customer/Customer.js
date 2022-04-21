import React from "react";
import "../../App.css";
import Board from "../board/Board";

/**
 *
 * Class represents  customers list.
 *
 * @class Customer
 * @extends Board
 *
 * @param {function} payToStore - method that increments cash in store
 * @property {function} decrement - method for decrement persons that are customers
 *
 * @returns html: customers or persons list
 *
 */

export default function Customer({
  columnId,
  column,
  columns,
  setColumns,
  payToStore,
}) {
  const decrement = (columnId) => {
    const newColumns = { ...columns };

    delete newColumns[columnId];

    setColumns({
      ...newColumns,
    });
  };

  return (
    <Board
      column={column}
      columnId={columnId}
      type={column.type}
      columns={columns}
      setColumns={setColumns}
    >
      total: {column.total || 0}
      <div>
        <span onClick={() => decrement(columnId)} className="button">
          🗑
        </span>
      </div>
      <button className="button" onClick={() => payToStore(columnId)}>
        pay
      </button>
    </Board>
  );
}
