import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Board from "./classes/person/Board";
import PetsList from "./classes/PetsList";
import ProductsList from "./classes/ProductsList";
import { columnsMock } from "./mocks/mocks";
import { v4 as uuid } from "uuid";
import AddPersonBlock from "./classes/person/addPerson";
import "./App.css";
import Cash from "./classes/Cash";
import { DragDrop, DropFood } from "./classes/DragDrop";
import Person from "./classes/person/Person";

function App() {
  const [columns, setColumns] = useState(columnsMock);
  const [name, setName] = useState(null);
  //delete person
  //delete from product whenb it bought
  //card petshop
  //category of food
  //karta nahore cash pobocka
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

      let total = 0;
      destItems.forEach((element) => (total = total + element.price));

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
          total: total,
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

  const [cash, setCash] = useState(0);

  const countCash = (id) => {
    let count = 0;

    const thisColumn = columns[id];
    count = cash + thisColumn.total;

    thisColumn.items.forEach((element) => {
      element.isDragDisabled = true;
      element.price = 0;
    });

    setCash(count);
    setColumns({
      ...columns,
      [id]: {
        ...thisColumn,
        total: 0,
      },
    });

    alert(`Thank you, ${thisColumn.name}!`);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100%",
          alignItems: "center",
        }}
      >
        <AddPersonBlock columns={columns} setColumns={setColumns} />
        <Cash cash={cash} />
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
                  columns={columns}
                  setColumns={setColumns}
                  payToStore={countCash}
                />
              );
            })}
          </div>
        </DragDropContext>
      </div>

      {/* <DragDrop /> */}
    </>
  );
}

export default App;
