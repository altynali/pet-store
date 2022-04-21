import React from "react";
import "../App.css";

/**
 *
 * Class represents cash.
 *
 * @class Cash
 *
 * @param {number} cash - cash
 * @param {string} text - text
 *
 * @returns html
 *
 */
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
