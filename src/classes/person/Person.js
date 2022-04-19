import React, { Children } from "react";
import { Droppable } from "react-beautiful-dnd";
import BoardBlock from "../BoardBlock";
import "../../App.css";

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 5,
      }}
      key={columnId}
    >
      <h2>{column?.name}</h2>
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
                    <BoardBlock
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
          {type === "person" ? (
            <>
              total: {column.total || 0}
              <button className="button" onClick={() => payToStore(columnId)}>
                pay
              </button>
            </>
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
}
