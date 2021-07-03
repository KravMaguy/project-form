import Button from "./Button.js";
export default function ButtonGrid({ handleClick, clickedButton, number }) {
  return (
    <div className="button-grid">
      {Array.from(Array(number).keys()).map((id) => (
        <Button
          handleClick={handleClick}
          id={id}
          clickedButton={clickedButton}
        />
      ))}
    </div>
  );
}
