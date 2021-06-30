import { useState, useEffect, useRef } from "react";
import localStorageHelpers from "./utils";
import NumberList from "./NumberLists";
function List() {
  const refContainer = useRef(null);
  const [numbersByDate, setByDate] = useState(
    localStorageHelpers.getLocalStorage()
  );
  const [input, setInput] = useState(0);
  const [orderedNumbers, setOrderedNumbers] = useState(
    localStorageHelpers.getLocalCompleted()
  );

  useEffect(() => {
    refContainer.current.focus();
  });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(numbersByDate));
  }, [numbersByDate]);

  useEffect(() => {
    localStorage.setItem("orderedList", JSON.stringify(orderedNumbers));
  }, [orderedNumbers]);

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
      <NumberList
        numbersByDate={numbersByDate}
        handleUnorganized={handleUnorganized}
        handleOrdered={handleOrdered}
        orderedNumbers={orderedNumbers}
      />
    </>
  );
}
export default List;
