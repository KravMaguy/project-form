import React, { useState } from "react";
function List() {
  const [numberList, setNumberList] = useState([]);
  const [input, setInput] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const number = {
      input,
      id: new Date().getTime().toString(),
      ordered: false,
    };
    setNumberList([...numberList, number]);
    setInput("");
    console.log(numberList);
  };
  const handleChange = (e) => {
    const val = e.target.value;
    setInput(val);
  };
  const handleClick = (id) => {
    console.log("clicked: ", id);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input onChange={handleChange} type="number" value={input} />
        </div>
        <button type="submit" value="submit">
          add{" "}
        </button>
      </form>
      {numberList.map((number) => {
        return (
          <div
            onClick={() => handleClick(number.id)}
            className="item"
            key={number.id}
          >
            <h4>Number: {number.input}</h4>
          </div>
        );
      })}
    </>
  );
}

export default function App() {
  return (
    <div className="container">
      <List />
    </div>
  );
}
