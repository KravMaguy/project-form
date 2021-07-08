import Button from "./Button.js";
import { useContext } from "react";
import { AppContext } from "../context.js";
export default function ButtonGrid() {
  const { number } = useContext(AppContext);

  return (
    <div className="button-grid">
      {Array.from(Array(number).keys()).map((id) => (
        <Button key={id} id={id} />
      ))}
    </div>
  );
}
