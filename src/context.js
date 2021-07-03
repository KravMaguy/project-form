import React, { useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [clickedButton, setClickedButton] = useState([]);
  const handleClick = (id) => {
    if (clickedButton.includes(id)) {
      const arr = clickedButton.filter((x) => x !== id);
      setClickedButton(arr);
    } else {
      setClickedButton([...clickedButton, id]);
    }
  };

  return (
    <AppContext.Provider value={{ handleClick, clickedButton }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
