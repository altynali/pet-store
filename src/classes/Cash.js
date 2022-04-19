import React, { useEffect, useState } from "react";
import "../App.css";

function Cash({ cash }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        border: "1px solid",
        marginBottom: 40,
      }}
    >
      <h2>&nbsp; Cash in all stores: {cash}</h2>
    </div>
  );
}

export default Cash;
