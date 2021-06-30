import React, { useState, useEffect } from "react";
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
  const [unorganizedNumbers, setUnorganized] = useState(getLocalStorage());
  const [input, setInput] = useState(0);
  const [orderedNumbers, setOrderedNumbers] = useState(getLocalCompleted());

  useEffect(() => {
    console.log(unorganizedNumbers);
    localStorage.setItem("list", JSON.stringify(unorganizedNumbers));
  }, [unorganizedNumbers]);

  useEffect(() => {
    console.log(orderedNumbers);
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
    setUnorganized([...unorganizedNumbers, number]);
    setInput(0);
  };
  const handleChange = (e) => {
    const val = e.target.value;
    let noZero = val.replace(/^0+/, "");
    setInput(noZero);
  };
  const handleUnorganized = (id) => {
    const Item = unorganizedNumbers.find((item) => item.id === id);
    const newUnorderedList = unorganizedNumbers.filter(
      (item) => item.id !== id
    );
    setUnorganized(newUnorderedList);
    const reOrderedNumbers = [...orderedNumbers, Item].sort((a, b) => {
      return Number(b.input) - Number(a.input);
    });
    setOrderedNumbers(reOrderedNumbers);
  };

  const handleOrdered = (id) => {
    const Item = orderedNumbers.find((item) => item.id === id);
    const newOrderedList = orderedNumbers.filter((item) => item.id !== id);
    const newOrderedListbyDate = [...unorganizedNumbers, Item].sort(function (
      a,
      b
    ) {
      var c = new Date(a.date);
      var d = new Date(b.date);
      return c - d;
    });
    setOrderedNumbers(newOrderedList);
    setUnorganized(newOrderedListbyDate);
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
      <div className="lists">
        <div className="list-wrapper">
          {unorganizedNumbers.length === 0 ? null : <h3>unorganized</h3>}
          {unorganizedNumbers.map((number) => {
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
          {orderedNumbers.length === 0 ? null : <h3>ordered</h3>}
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