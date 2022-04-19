import React, { useState } from "react";
import "./App.css";
import Cash from "./classes/Cash";
import Store from "./Store";
import {
  columnsMockFirst,
  columnsMockSecond,
  columnsMockThird,
} from "./mocks/mocks";

function App() {
  const [cash, setCash] = useState(0);

  return (
    <>
      <Cash cash={cash} />

      <Store cash={cash} setCash={setCash} columnsMock={columnsMockFirst} />
      <Store cash={cash} setCash={setCash} columnsMock={columnsMockSecond} />
      <Store cash={cash} setCash={setCash} columnsMock={columnsMockThird} />
    </>
  );
}

export default App;
