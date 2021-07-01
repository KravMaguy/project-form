import React, { useState, useEffect } from "react";
import axios from "axios";

const fetchCountries = (url) => {
  return axios
    .get(url)
    .then(({ data }) => data)
    .catch((err) => console.error(err));
};

function CountryIso() {
  const url = "https://restcountries.eu/rest/v2/all";
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    console.log("get the api and put in state");
    fetchCountries(url).then((countriesInfo) => setCountries(countriesInfo));
  }, []);
  console.log(countries);
  return (
    <select className="country-select">
      {countries.map((option) => (
        <option value={option.alpha2Code}>{option.name}</option>
      ))}
    </select>
  );
}
export default CountryIso;
