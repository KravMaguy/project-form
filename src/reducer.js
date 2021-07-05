const reducer = (state, action) => {
  if (action.type === "INCREASE") {
    const clickedButton = state.clickedButton;
    if (clickedButton.includes(action.payload)) {
      const arr = clickedButton.filter((x) => x !== action.payload);
      return { ...state, clickedButton: arr };
    } else {
      const newArr = [...clickedButton, action.payload];
      return { ...state, clickedButton: newArr };
    }
  }
  throw new Error("no matching action type");
};

export default reducer;
