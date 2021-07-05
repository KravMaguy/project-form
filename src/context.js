import React, { useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  clickedButton: [],
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

  const handleClick = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  return (
    <AppContext.Provider value={{ handleClick, ...state }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
