import React, { useEffect, useState } from "react";
import "../App.css";

function Cash({ cash, text, styles }) {
  return (
    <div style={styles}>
      <h2>
        &nbsp; {text} {cash}
      </h2>
    </div>
  );
}

export default Cash;
