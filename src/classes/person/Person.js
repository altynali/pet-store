import React, { Children } from "react";
import "../../App.css";
import Board from "../board/Board";

export default function Person({
  columnId,
  column,
  type,
  decrement,
  children,
  columns,
  setColumns,
  payToStore,
}) {
  return (
    <Board
      column={column}
      columnId={columnId}
      type={column.type}
      columns={columns}
      setColumns={setColumns}
      payToStore={payToStore}
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
