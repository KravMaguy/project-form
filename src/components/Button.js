import React, { useContext } from "react";
import { AppContext } from "../context.js";

export default function Button({ id }) {
  const { handleClick, clickedButton } = useContext(AppContext);

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
