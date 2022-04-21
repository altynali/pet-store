import React, { Component } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Product from "./classes/Product";
import AddPersonBlock from "./classes/person/addPerson";
import "./App.css";
import Person from "./classes/person/Person";
import Cash from "./classes/Cash";

class Store extends Component {
  constructor(props) {
    super(props);
    const { cash, setCash, index, columns } = props;

    this.state = {
      cash,
      setCash,
      index,
      columns,
      localCash: 0,
    };

    this.setColumns = (columns) => {
      this.setState({
        ...this.state,
        columns,
      });
    };

    this.setLocalCash = (localCash) => {
      this.setState({
        ...this.state,
        localCash,
      });
    };

    this.setCash = (cash) => {
      this.state.setCash(cash);
    };

    this.onDragEnd = (result) => {
      if (!result.destination) return;
      const { source, destination } = result;
      const columns = this.state.columns;

      if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];

        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);

        let total = 0;
        destItems.forEach((element) => (total = total + element.price));

        this.setColumns({
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
        this.setColumns({
          ...columns,
          [source.droppableId]: {
            ...column,
            items: copiedItems,
          },
        });
      }
    };

    this.decrement = (item, columnId) => {
      const columns = this.state.columns;

      const thisColumn = columns[columnId];
      const thisItems = [...thisColumn.items];
      thisItems.splice(
        thisItems.findIndex((obj) => obj.id === item.id),
        1
      );

      this.setColumns({
        ...columns,
        [columnId]: {
          ...thisColumn,
          items: thisItems,
        },
      });
    };

    this.countCash = (id) => {
      let count = 0;
      const { cash, columns } = this.state;

      const thisColumn = columns[id];
      count = cash + thisColumn.total;

      thisColumn.items.forEach((element) => {
        element.isDragDisabled = true;
        element.price = 0;
      });

      this.setColumns({
        ...columns,
        [id]: {
          ...thisColumn,
          total: 0,
        },
      });
      this.setCash(count);

      this.countStoreEarnings(id);

      alert(`Thank you, ${thisColumn.name}!`);
    };

    this.countStoreEarnings = (id) => {
      let count = 0;
      const { localCash, columns } = this.state;

      const thisColumn = columns[id];
      count = localCash + thisColumn.total;

      thisColumn.items.forEach((element) => {
        element.isDragDisabled = true;
        element.price = 0;
      });

      this.setColumns({
        ...this.state.columns,
        [id]: {
          ...thisColumn,
          total: 0,
        },
      });
      this.setLocalCash(count);
    };
  }

  render() {
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
          <h2>#{this.state.index + 1} store</h2>
          <Cash text="Earnings:" cash={this.state.localCash} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100%",
            alignItems: "center",
          }}
        >
          <AddPersonBlock
            columns={this.state.columns}
            setColumns={this.setColumns}
          />
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", height: "100%" }}
        >
          <DragDropContext onDragEnd={(result) => this.onDragEnd(result)}>
            <div className="grid">
              {Object.entries(this.state.columns).map(
                ([columnId, column], index) => {
                  return column.type === "product" ? (
                    <Product
                      key={index}
                      column={column}
                      columnId={columnId}
                      type={column.type}
                      decrement={this.decrement}
                      columns={this.state.columns}
                      setColumns={this.setColumns}
                    />
                  ) : (
                    <Person
                      key={index}
                      column={column}
                      columnId={columnId}
                      type={column.type}
                      columns={this.state.columns}
                      setColumns={this.setColumns}
                      payToStore={this.countCash}
                    />
                  );
                }
              )}
            </div>
          </DragDropContext>
        </div>
      </>
    );
  }
}

export default Store;
