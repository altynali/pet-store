import React, { Children } from "react";
import { Droppable } from "react-beautiful-dnd";
import BoardBlock from "../BoardBlock";
import "../../App.css";
import Board from "./Board";

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
      <button className="button" onClick={() => payToStore(columnId)}>
        pay
      </button>
    </Board>
  );
}
