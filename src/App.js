import React from "react";
// import List from "./components/List";
import ButtonUi from "./components/ButtonUi";
import CountryIso from "./components/CountryIso";
import CustomerTable from "./components/CustomerTable";
import GitHubList from "./components/GitHubList";
import GitHubUser from "./components/GitHubUser";
import CarsList from "./components/carslist";

export default function App() {
  return (
    <div className="container main">
      {/* <CustomerTable /> */}
      <CarsList/>
      {/* <GitHubUser /> */}
      {/* <CountryIso /> */}
      {/* <ButtonUi /> */}
      {/* <List /> */}
      {/* <GitHubList /> */}
    </div>
  );
}
