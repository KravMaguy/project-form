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
  const [loaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetchCountries(url).then((countriesInfo) => {
      setCountries(countriesInfo);
      setIsLoaded(true);
    });
  }, []);
  return (
    <select className="country-select">
      {loaded ? (
        countries.map((option) => (
          <option key={option.alpha2Code} value={option.alpha2Code}>
            {option.name}
          </option>
        ))
      ) : (
        <option value="Loading...">
          Getting countries data please wait...
        </option>
      )}
    </select>
  );
}

export default CountryIso;
