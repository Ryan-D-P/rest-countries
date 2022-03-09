import Navbar from "./Navbar";
import Search from "./Search";
import Countries from "./Countries";
import Detail from "./Detail";
import { useEffect, useState } from "react";

function App() {
  // State of the full data of countries
  const [countryData, setCountryData] = useState([]);
  // State of the currently displayed countries
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      // https://restcountries.com/#api-endpoints-v2
      const response = await fetch(`https://restcountries.com/v2/all`);
      const data = await response.json();
      setCountries(data);
      setCountryData(data);
    };

    getCountries();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Search countryData={ countryData } setCountries={ setCountries } />
      <Countries countries={ countries } />
    </div>
  );
}

export default App;
