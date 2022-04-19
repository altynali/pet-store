import React from "react";
import { Droppable } from "react-beautiful-dnd";
import BoardBlock from "./BoardBlock";
import "../App.css";

function ProductsList({ column, columnId, incrementProduct, decrement, type }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "15%",
      }}
      key={columnId}
    >
      <h2>{column.name}</h2>
      <div style={{ margin: 8 }}>
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
      <div style={{ width: "80%" }}>
        <input type="text" className="input" placeholder="name" />
        <input type="text" className="input" placeholder="price" />
        <button className="button" onClick={incrementProduct}>
          add
        </button>
      </div>
    </div>
  );
}

export default ProductsList;
