import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { useDrop } from "react-dnd";
import { elseProducts, productsMock } from "../mocks/mocks";

export default function DropFood({ droppableId }) {
  return (
    <Droppable droppableId={droppableId} type={`droppableSubItem`}>
      {(provided, snapshot) => (
        <div ref={provided.innerRef}>
          {elseProducts.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided, snapshot) => (
                <div style={{ display: "flex" }}>
                  <div ref={provided.innerRef} {...provided.draggableProps}>
                    {item.content}
                    <span
                      {...provided.dragHandleProps}
                      style={{
                        display: "block",
                        margin: "0 10px",
                        border: "1px solid #000",
                      }}
                    >
                      Drag
                    </span>
                  </div>
                  {provided.placeholder}
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
