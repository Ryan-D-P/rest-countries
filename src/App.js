import Navbar from "./Navbar";
import Home from "./Home";
import Detail from "./Detail";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home countryData={ countryData } countries={ countries } setCountries={ setCountries } /> } />
          <Route path="alpha">
            <Route path=":code" element={ <Detail /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
