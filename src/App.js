import React, { useState } from "react";
import "./App.css";
import Cash from "./classes/Cash";
import Store from "./Store";
import { stores } from "./mocks/mocks";

/**
 * Represents entire app.
 * @class App
 *
 * @property {number} cash - represents cash in all stores
 * @property {Array<Object>} stores - array of all stores
 * @property {function} setCash - cash's setter in all stores
 *
 * @returns {html}: section of cash in every store(Cash class) and array of stores(Store class)
 *
 */

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
      {stores?.map((storeColumn, i) => (
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
