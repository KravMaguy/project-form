const reducer = (state, action) => {
  if (action.type === "BUTTON_COLOR") {
    const clickedButton = state.clickedButton;
    if (clickedButton.includes(action.payload)) {
      const arr = clickedButton.filter((x) => x !== action.payload);
      return { ...state, clickedButton: arr };
    } else {
      const newArr = [...clickedButton, action.payload];
      return { ...state, clickedButton: newArr };
    }
  }
  if (action.type === "INCREASE") {
    console.log("increase");
    return { ...state, number: action.payload };
  }
  throw new Error("no matching action type");
};

export default reducer;
