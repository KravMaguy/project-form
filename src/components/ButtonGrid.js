import Button from "./Button.js";
export default function ButtonGrid({ number }) {
  return (
    <div className="button-grid">
      {Array.from(Array(number).keys()).map((id) => (
        <Button key={id} id={id} />
      ))}
    </div>
  );
}
