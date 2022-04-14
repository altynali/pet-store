import React from "react";
import { useDrag } from "react-dnd";

function Picture({ id, url, text }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div ref={drag}>
      <img
        src={url}
        width="150px"
        style={{ border: isDragging ? "5px solid pink" : "0px" }}
        alt=""
      />
      <div>{text}</div>
    </div>
  );
}

export default Picture;
