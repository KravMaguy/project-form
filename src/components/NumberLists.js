export default function NumberList({
  numbersByDate,
  handleUnorganized,
  orderedNumbers,
  handleOrdered,
}) {
  const checkedStyle = { textDecoration: "line-through" };
  return (
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
  );
}
