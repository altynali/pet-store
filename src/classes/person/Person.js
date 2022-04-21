import React from "react";
import "../../App.css";
import Board from "../board/Board";

export default function Person({
  columnId,
  column,
  type,
  children,
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
