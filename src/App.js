import React from "react";
import List from "./components/List";
import ButtonUi from "./components/ButtonUi";
import CountryIso from "./components/CountryIso";
export default function App() {
  return (
    <div className="container">
      <CountryIso />
      <ButtonUi />
      {/* <List /> */}
    </div>
  );
}
