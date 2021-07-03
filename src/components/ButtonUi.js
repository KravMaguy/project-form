import { useState } from "react";
import ButtonGenerator from "./ButtonGenerator.js";
import ButtonGrid from "./ButtonGrid.js";

function ButtonUi() {
  //array of ids
  const min = 1;
  const max = 16;
  const [number, setNumber] = useState(1);
  const handleChange = (e) => {
    setNumber(Number(e.target.value));
  };

  return (
    <>
      <ButtonGenerator
        handleChange={handleChange}
        min={min}
        max={max}
        number={number}
      />

      <ButtonGrid number={number} />
    </>
  );
}

export default ButtonUi;
