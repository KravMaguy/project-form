import React, { useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  clickedButton: [],
  number: 1,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const [clickedButton, setClickedButton] = useState([]);
  // const handleClick = (id) => {
  //   if (clickedButton.includes(id)) {
  //     const arr = clickedButton.filter((x) => x !== id);
  //     setClickedButton(arr);
  //   } else {
  //     setClickedButton([...clickedButton, id]);
  //   }
  // };

  // const [number, setNumber] = useState(1);
  const handleChange = (e) => {
    // setNumber(Number(e.target.value));
    dispatch({ type: "INCREASE", payload: Number(e.target.value) });
  };
  const handleClick = (id) => {
    dispatch({ type: "BUTTON_COLOR", payload: id });
  };

  return (
    <AppContext.Provider value={{ handleChange, handleClick, ...state }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
