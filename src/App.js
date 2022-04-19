import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Person from "./classes/person/Person";
import PetsList from "./classes/PetsList";
import ProductsList from "./classes/ProductsList";
import { columnsMock } from "./mocks/mocks";
import { v4 as uuid } from "uuid";
import AddPersonBlock from "./classes/person/addPerson";
import "./App.css";

function App() {
  const [columns, setColumns] = useState(columnsMock);
  const [name, setName] = useState(null);

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

  const decrement = (item, columnId) => {
    const thisColumn = columns[columnId];
    const thisItems = [...thisColumn.items];
    thisItems.splice(
      thisItems.findIndex((obj) => obj.id === item.id),
      1
    );

    setColumns({
      ...columns,
      [columnId]: {
        ...thisColumn,
        items: thisItems,
      },
    });
  };

  const incrementPerson = () => {
    setColumns({
      ...columns,
      [uuid()]: {
        name: name,
        type: "person",
        items: [],
      },
    });
  };

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", height: "100%" }}
      >
        <AddPersonBlock columns={columns} setColumns={setColumns} />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", height: "100%" }}
      >
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          <div className="grid">
            {Object.entries(columns).map(([columnId, column], index) => {
              return column.type === "pet" ? (
                <PetsList
                  key={index}
                  column={column}
                  columnId={columnId}
                  type={column.type}
                  decrement={decrement}
                  columns={columns}
                  setColumns={setColumns}
                />
              ) : column.type === "product" ? (
                <ProductsList
                  key={index}
                  column={column}
                  columnId={columnId}
                  type={column.type}
                  decrement={decrement}
                  columns={columns}
                  setColumns={setColumns}
                />
              ) : (
                <Person
                  key={index}
                  column={column}
                  columnId={columnId}
                  type={column.type}
                />
              );
            })}
          </div>
        </DragDropContext>
      </div>
    </>
  );
}

export default App;
