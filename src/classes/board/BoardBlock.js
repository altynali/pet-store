import React from "react";
import { Draggable } from "react-beautiful-dnd";

export default function BoardBlock({ item, index, decrement, columnId }) {
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
              </div>

              <div>
                <span
                  onClick={() => decrement(item, columnId)}
                  style={{
                    cursor: "pointer",
                    display: item.isDragDisabled ? "none" : "flex",
                  }}
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
