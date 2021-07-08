import { useContext } from "react";
import { AppContext } from "../context.js";

export default function ButtonGenerator({ min, max }) {
  const { number, handleChange } = useContext(AppContext);

  return (
    <form className="form button-selector">
      <input
        type="number"
        onChange={handleChange}
        min={min}
        max={max}
        value={number}
      />
    </form>
  );
}
