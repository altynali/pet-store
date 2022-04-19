import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { useDrop } from "react-dnd";
import { elseProducts } from "../mocks/mocks";
import DropFood, { DragDrop } from "./DragDrop";

export default function BoardBlock({
  item,
  index,
  type,
  decrement,
  column,
  columnId,
  columns,
  setColumns,
}) {
  return (
    <Draggable
      key={item.id}
      draggableId={item.id}
      index={index}
      isDragDisabled={item.isDragDisabled || false}
    >
      {(provided, snapshot) => {
        return (
          <>
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={{
                userSelect: "none",
                padding: 16,
                margin: "0 0 8px 0",
                minHeight: "50px",
                backgroundColor: snapshot.isDragging ? "#263B4A" : "#456C86",
                color: "white",
                display: "flex",
                justifyContent: "space-between",
                ...provided.draggableProps.style,
              }}
            >
              <div>
                {item.content} <br />
                {item.price !== 0 && `Price: ${item.price}`}
                {item.type === "pet" && type === "person" && <input />}
              </div>

              {/* {type !== "product" && type !== "pet" && ( */}
              <div>
                {/* <span>🖋 &nbsp;</span> */}
                <span
                  onClick={() => decrement(item, columnId)}
                  style={{ cursor: "pointer" }}
                >
                  🗑
                </span>
              </div>
              {/* )} */}
            </div>
          </>
        );
      }}
    </Draggable>
  );
}
