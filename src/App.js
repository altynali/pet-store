import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Board from "./classes/Board";
import PetsList from "./classes/PetsList";
import ProductsList from "./classes/ProductsList";
import { columnsMock } from "./mocks/mocks";

function App() {
  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };
  const [columns, setColumns] = useState(columnsMock);

  const decrement = (item, columnId) => {
    const thisColumn = columns[columnId];
    const thisItems = [...thisColumn.items];
    thisItems.splice(item.index, 1);

    setColumns({
      ...columns,
      [columnId]: {
        ...thisColumn,
        items: thisItems,
      },
    });
  };

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", height: "100%" }}
      >
        <div>
          <input type="text" className="input" placeholder="person name" />
          {/* <label>name</label>
          <input type="text" className="input" /> */}
          <button className="button">add</button>
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", height: "100%" }}
      >
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return column.type === "pet" ? (
              <PetsList
                key={index}
                column={column}
                columnId={columnId}
                type={column.type}
                decrement={decrement}
              />
            ) : column.type === "product" ? (
              <ProductsList
                key={index}
                column={column}
                columnId={columnId}
                type={column.type}
                decrement={decrement}
              />
            ) : (
              <Board
                key={index}
                column={column}
                columnId={columnId}
                type={column.type}
              />
            );
          })}
        </DragDropContext>
      </div>
    </>
  );
}

export default App;
