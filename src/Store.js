import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Product from "./classes/Product";
import AddPersonBlock from "./classes/person/addPerson";
import "./App.css";
import Person from "./classes/person/Person";
import Cash from "./classes/Cash";

function Store({ cash, setCash, columnsMock, index }) {
  const [columns, setColumns] = useState(columnsMock);
  const [localCash, setLocalCash] = useState(0);

  //delete person
  //delete from product whenb it bought
  //make then every array new for every store
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

  const decrementPerson = (columnId) => {
    const newColumns = { ...columns };

    delete newColumns[columnId];

    setColumns({
      ...newColumns,
    });
  };

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
    countStoreEarnings(id);

    alert(`Thank you, ${thisColumn.name}!`);
  };

  const countStoreEarnings = (id) => {
    let count = 0;

    const thisColumn = columns[id];
    count = localCash + thisColumn.total;

    thisColumn.items.forEach((element) => {
      element.isDragDisabled = true;
      element.price = 0;
    });

    setLocalCash(count);
    setColumns({
      ...columns,
      [id]: {
        ...thisColumn,
        total: 0,
      },
    });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100%",
          alignItems: "center",
          border: "1px solid",
          margin: `40px 0`,
        }}
      >
        <h2>#{index + 1} store</h2>
        <Cash text="Earnings:" cash={localCash} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100%",
          alignItems: "center",
        }}
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
              return column.type === "product" ? (
                <Product
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
                  decrement={decrementPerson}
                  setColumns={setColumns}
                  payToStore={countCash}
                />
              );
            })}
          </div>
        </DragDropContext>
      </div>
    </>
  );
}

export default Store;

// column.type === "pet" ? (
//   <Pet
//     key={index}
//     column={column}
//     columnId={columnId}
//     type={column.type}
//     decrement={decrement}
//     columns={columns}
//     setColumns={setColumns}
//   />
// ) :
