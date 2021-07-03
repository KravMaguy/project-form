import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={"ekjdfhs you"}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppProvider };
