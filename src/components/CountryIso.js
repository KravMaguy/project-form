import React, { useState, useEffect } from "react";
import axios from "axios";

const fetchCountries = () => {
  const url = "https://restcountries.eu/rest/v2/all";
  return axios.get(url).then(({ data }) => console.log(data));
};
function CountryIso() {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    console.log("get the api and put in state");
    fetchCountries();
  }, []);
  return (
    <>
      <label for="cars">Choose a car:</label>
      <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </>
  );
}
export default CountryIso;
