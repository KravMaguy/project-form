import { useState, useContext } from "react";
import ButtonGenerator from "./ButtonGenerator.js";
import ButtonGrid from "./ButtonGrid.js";
import { AppContext } from "../context.js";

function ButtonUi() {
  const data = useContext(AppContext);
  //array of ids
  const min = 1;
  const max = 16;
  const [number, setNumber] = useState(1);
  const [clickedButton, setClickedButton] = useState([]);
  const handleChange = (e) => {
    setNumber(Number(e.target.value));
  };
  const handleClick = (id) => {
    if (clickedButton.includes(id)) {
      const arr = clickedButton.filter((x) => x !== id);
      setClickedButton(arr);
    } else {
      setClickedButton([...clickedButton, id]);
    }
  };

  return (
    <>
      <ButtonGenerator
        handleChange={handleChange}
        min={min}
        max={max}
        number={number}
      />

      <ButtonGrid
        number={number}
        handleClick={handleClick}
        clickedButton={clickedButton}
      />
    </>
  );
}

export default ButtonUi;
