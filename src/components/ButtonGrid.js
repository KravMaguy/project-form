import React, { useState } from "react";

function Button() {
  const [color, setColor] = useState("#7CFC00");
  //array of ids
  const n = 16;
  const [clickedButton, setClickedButton] = useState([]);
  // const [checked, setChecked]=useState()
  const handleClick = (id) => {
    console.log("i was clicked: ", id);
    if (clickedButton.includes(id)) {
      const arr = clickedButton.filter((x) => x !== id);
      setClickedButton(arr);
    } else {
      setClickedButton([...clickedButton, id]);
    }
  };

  return [...Array(n)].map((e, id) => (
    <button
      className={clickedButton.includes(id) ? "greenbutton" : "whitebutton"}
      onClick={() => handleClick(id)}
      key={id}
    >
      Change color
    </button>
  ));
}
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Button className="GridStyle" />
    </div>
  );
}
