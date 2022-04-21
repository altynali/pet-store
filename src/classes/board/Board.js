import React from "react";
import { Droppable } from "react-beautiful-dnd";
import BoardItem from "./BoardItem";
import "../../App.css";

/**
 * Class represents one board. It is area where product can be droped.
 *
 * @class Board
 *
 * @param {number} columnId - represents particular column's id, unique value
 * @param {Object} column - represents particular column
 * @param {string} type - represents type of column(product list's column or customer's column)
 * @param {any} children - children elements in html
 * @param {Array<Object>} columns - columns (products list and customers)
 * @param {function} setColumns - setter for columns in store
 * @param {function} decrement - method for decrements item in board
 *
 * @returns html: droppable area and board's items(products)
 */

export default function Board({
  columnId,
  column,
  type,
  children,
  columns,
  setColumns,
  decrement,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 5,
      }}
      key={columnId}
    >
      <h3>{column?.name}</h3>
      <h3>{column?.email}</h3>
      <div>
        <Droppable droppableId={columnId} key={columnId}>
          {(provided, snapshot) => {
            return (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  background: snapshot.isDraggingOver
                    ? "lightblue"
                    : "lightgrey",
                  padding: 4,
                  width: 250,
                  minHeight: 500,
                }}
              >
                {column.items.map((item, index) => {
                  return (
                    <BoardItem
                      item={item}
                      index={index}
                      key={index}
                      type={type}
                      columnId={columnId}
                      decrement={decrement}
                      column={column}
                      columns={columns}
                      setColumns={setColumns}
                    />
                  );
                })}
                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
        <div
          style={{
            background: "lightgrey",
            padding: 4,
            width: 250,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
