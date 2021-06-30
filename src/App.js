import React, { useState, useEffect, useRef } from "react";
const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};
const getLocalCompleted = () => {
  let orderedList = localStorage.getItem("orderedList");
  if (orderedList) {
    return (orderedList = JSON.parse(localStorage.getItem("orderedList")));
  } else {
    return [];
  }
};
function List() {
  const refContainer = useRef(null);
  const [numbersByDate, setByDate] = useState(getLocalStorage());
  const [input, setInput] = useState(0);
  const [orderedNumbers, setOrderedNumbers] = useState(getLocalCompleted());

  useEffect(() => {
    refContainer.current.focus();
  });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(numbersByDate));
  }, [numbersByDate]);

  useEffect(() => {
    localStorage.setItem("orderedList", JSON.stringify(orderedNumbers));
  }, [orderedNumbers]);

  const checkedStyle = { textDecoration: "line-through" };
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    const number = {
      input,
      id: date.getTime().toString(),
      date: date,
    };
    setByDate([...numbersByDate, number]);
    setInput(0);
    refContainer.current.focus();
  };
  const handleChange = (e) => {
    const val = e.target.value;
    let noZero = val.replace(/^0+/, "");
    setInput(noZero);
  };
  const handleUnorganized = (id) => {
    const Item = numbersByDate.find((item) => item.id === id);
    const newUnorderedList = numbersByDate.filter((item) => item.id !== id);
    setByDate(newUnorderedList);
    const reOrderedNumbers = [...orderedNumbers, Item].sort((a, b) => {
      return Number(b.input) - Number(a.input);
    });
    setOrderedNumbers(reOrderedNumbers);
  };

  const handleOrdered = (id) => {
    const Item = orderedNumbers.find((item) => item.id === id);
    const newOrderedList = orderedNumbers.filter((item) => item.id !== id);
    const newOrderedListbyDate = [...numbersByDate, Item].sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
    setOrderedNumbers(newOrderedList);
    setByDate(newOrderedListbyDate);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            onChange={handleChange}
            type="number"
            value={input}
            ref={refContainer}
          />
        </div>
        <button type="submit" value="submit">
          add{" "}
        </button>
      </form>
      <div className="lists">
        <div className="list-wrapper">
          {numbersByDate.length === 0 ? null : <h3>By Date:</h3>}
          {numbersByDate.map((number) => {
            return (
              <div className="item" key={number.id}>
                <h4>Number: {number.input}</h4>
                <button onClick={() => handleUnorganized(number.id)}>
                  remove
                </button>
              </div>
            );
          })}
        </div>
        <div className="list-wrapper">
          {" "}
          {orderedNumbers.length === 0 ? null : <h3>By Number:</h3>}
          {orderedNumbers.map((number) => {
            return (
              <div className="item" key={number.id}>
                <h4 style={checkedStyle}>Number: {number.input}</h4>
                <button onClick={() => handleOrdered(number.id)}>add</button>
              </div>
            );
          })}
        </div>
      </div>
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
