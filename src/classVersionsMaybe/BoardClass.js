import React, { Component } from "react";
import { Droppable } from "react-beautiful-dnd";
import BoardBlock from "./BoardBlock";
import "../../App.css";

export default class Board extends Component {
  constructor(props) {
    super(props);
    const { columnId, column, type, decrement, children, columns, setColumns } =
      props;

    this.state = {
      columnId,
      column,
      type,
      decrement,
      children,
      columns,
      setColumns,
    };
  }

  render() {
    // const { columnId, column, type, decrement, children, columns, setColumns } =
    //   this.state;
    console.log(this.state);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: 5,
        }}
        key={this.state.columnId}
      >
        <h2>{this.state.column?.name}</h2>
        <h3>{this.state.column?.email}</h3>
        <div>
          <Droppable
            droppableId={this.state.columnId}
            key={this.state.columnId}
          >
            {(provided, snapshot) => {
              return (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{
                    background: snapshot.isDraggingOver
                      ? "lightblue"
                      : "lightgrey",
                    padding: 4,
                    width: 250,
                    minHeight: 500,
                  }}
                >
                  {this.state.column.items.map((item, index) => {
                    return (
                      <BoardBlock
                        item={item}
                        index={index}
                        key={index}
                        type={this.state.type}
                        columnId={this.state.columnId}
                        decrement={this.state?.decrement}
                        column={this.state.column}
                        columns={this.state.columns}
                        setColumns={this.state.setColumns}
                      />
                    );
                  })}
                  {provided.placeholder}
                </div>
              );
            }}
          </Droppable>
          <div
            style={{
              background: "lightgrey",
              padding: 4,
              width: 250,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {this.state.children}
          </div>
        </div>
      </div>
    );
  }
}
