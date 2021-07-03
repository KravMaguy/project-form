export default function ButtonGenerator({ handleChange, min, max, number }) {
  console.log(number, "number");
  return (
    <form className="form button-selector">
      <input
        type="number"
        onChange={handleChange}
        min={min}
        max={max}
        value={number}
      />
    </form>
  );
}
