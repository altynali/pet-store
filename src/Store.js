import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Product from "./classes/Product";
import AddCustomerBlock from "./classes/customer/AddCustomerBlock";
import "./App.css";
import Customer from "./classes/customer/Customer";
import Cash from "./classes/Cash";

/**
 * Class represents one store.
 * @class Store
 *
 * @param {number} cash - represents cash in this particular store
 * @param {function} setCash - setter in whole store, from props
 * @param {number} index - index of store
 * @param {Array<Object>} columnsMock - columns (products list and customers)
 *
 * @property {number} localCash - earnings of this one store
 * @property {function} setLocalCash - setter for store's earnings
 * @property {Array<Object>} columns - columns (products list and customers), value of columns, that was set
 * @property {function} setColumns -  setter for store's columns
 * @property {function} onDragEnd - method for drag and drop functionality
 * @property {function} countCash - method for counting cash in all stores
 * @property {function} countStoreEarnings - method for counting cash in this particular store
 *
 * @returns html: AddCustomerBlock, columns: Products list and customers
 *
 */

function Store({ cash, setCash, columnsMock, index }) {
  const [columns, setColumns] = useState(columnsMock);
  const [localCash, setLocalCash] = useState(0);

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
        <AddCustomerBlock columns={columns} setColumns={setColumns} />
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
                  columns={columns}
                  setColumns={setColumns}
                />
              ) : (
                <Customer
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
    </>
  );
}

export default Store;
