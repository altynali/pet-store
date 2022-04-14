import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Layout from "./classes/Layout";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <DndProvider backend={HTML5Backend}>
        <div className="App">
          <Layout />
        </div>
      </DndProvider>
    );
  }
}

export default App;
