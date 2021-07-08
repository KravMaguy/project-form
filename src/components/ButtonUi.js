import ButtonGenerator from "./ButtonGenerator.js";
import { useContext } from "react";
import ButtonGrid from "./ButtonGrid.js";
import { AppContext } from "../context.js";

function ButtonUi() {
  const { number, handleChange } = useContext(AppContext);

  //array of ids
  const min = 1;
  const max = 16;
  // const [number, setNumber] = useState(1);
  // const handleChange = (e) => {
  //   setNumber(Number(e.target.value));
  // };

  return (
    <>
      <ButtonGenerator
        // handleChange={handleChange}
        min={min}
        max={max}
        // number={number}
      />

      <ButtonGrid
      // number={number}
      />
    </>
  );
}

export default ButtonUi;
