import React from "react";
import List from "./components/List";
import ButtonGrid from "./components/ButtonGrid";
import CountryIso from "./components/CountryIso";
export default function App() {
  return (
    <div className="container">
      <CountryIso />
      <ButtonGrid />
      {/* <List /> */}
    </div>
  );
}
