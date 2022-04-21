import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd";

export default class BoardBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item,
      index: props.index,
      columnId: props.columnId,
    };

    this.decrement = props.decrement;
  }
  render() {
    return (
      <Draggable
        key={this.state.item.id}
        draggableId={this.state.item?.id}
        index={this.state.index}
        isDragDisabled={this.state.item?.isDragDisabled || false}
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
                  {this.state.item.content} <br />
                  {this.state.item.price !== 0 &&
                    `Price: ${this.state.item.price}`}
                </div>

                <div>
                  <span
                    onClick={() =>
                      this.decrement(this.state.item, this.state.columnId)
                    }
                    style={{
                      cursor: "pointer",
                      display: this.state.item.isDragDisabled ? "none" : "flex",
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
}
