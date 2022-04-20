import React, { useState } from "react";
import "./App.css";
import Cash from "./classes/Cash";
import Store from "./Store";
import { stores } from "./mocks/mocks";

function App() {
  const [cash, setCash] = useState(0);

  return (
    <>
      <Cash
        cash={cash}
        text="Cash in all stores:"
        styles={{
          display: "flex",
          justifyContent: "center",
          border: "1px solid",
          marginBottom: 60,
        }}
      />
      {stores.map((storeColumn, i) => (
        <Store
          key={i}
          index={i}
          cash={cash}
          setCash={setCash}
          columnsMock={storeColumn}
        />
      ))}
    </>
  );
}

export default App;
