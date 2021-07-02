import { useState } from "react";

function ButtonGrid() {
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
      <form className="form button-selector">
        <input
          type="number"
          onChange={handleChange}
          min={min}
          max={max}
          value={number}
        />
      </form>

      <div className="button-grid">
        {Array.from(Array(number).keys()).map((id) => (
          <button
            className={
              clickedButton.includes(id)
                ? "greenbutton button-component"
                : "whitebutton button-component"
            }
            onClick={() => handleClick(id)}
            key={id}
          >
            Change color
          </button>
        ))}
      </div>
    </>
  );
}

export default ButtonGrid;
