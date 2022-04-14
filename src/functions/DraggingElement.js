import React from "react";
import { useDrag } from "react-dnd";

function DraggingElement({ id, children }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return <div ref={drag}>{children}</div>;
}

export default DraggingElement;
