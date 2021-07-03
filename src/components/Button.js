import React from "react";

export default function Button({ handleClick, id, clickedButton }) {
  return (
    <button
      className={
        clickedButton.includes(id)
          ? "greenbutton button-component"
          : "whitebutton button-component"
      }
      onClick={() => handleClick(id)}
    >
      Change color
    </button>
  );
}
