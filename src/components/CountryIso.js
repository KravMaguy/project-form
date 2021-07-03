import { useState, useEffect } from "react";
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
    fetchCountries(url).then((countriesInfo) => setCountries(countriesInfo));
  }, []);
  // console.log(countries);
  return (
    <select className="country-select">
      {countries.length
        ? countries.map((option) => (
            <option key={option.alpha2Code} value={option.alpha2Code}>
              {option.name}
            </option>
          ))
        : null}
    </select>
  );
}

export default CountryIso;
