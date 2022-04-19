import React, { Children } from "react";
import { Droppable } from "react-beautiful-dnd";
import BoardBlock from "../BoardBlock";

export default function Person({
  columnId,
  column,
  type,
  decrement,
  children,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      key={columnId}
    >
      <h2>{column.name}</h2>
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
                    />
                  );
                })}
                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
      </div>
      {children}
    </div>
  );
}
