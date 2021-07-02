import { useState } from "react";

function ButtonGrid() {
  //array of ids
  const idMaker = (number) => {
    return Array.from(Array(number).keys());
  };
  const sixTeenIds = idMaker(16);
  const [clickedButton, setClickedButton] = useState([]);
  const handleClick = (id) => {
    if (clickedButton.includes(id)) {
      const arr = clickedButton.filter((x) => x !== id);
      setClickedButton(arr);
    } else {
      setClickedButton([...clickedButton, id]);
    }
  };

  return (
    <div className="button-grid">
      {sixTeenIds.map((id) => (
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
  );
}

export default ButtonGrid;
