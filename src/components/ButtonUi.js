import { useState } from "react";
import ButtonGenerator from "./ButtonGenerator.js";
import ButtonGrid from "./ButtonGrid.js";
function ButtonUi() {
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
        value={number}
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
