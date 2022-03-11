import Navbar from "./Navbar";
import Home from "./Home";
import Detail from "./Detail";
import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const ModeContext = createContext(null);

function App() {
  // State of the full data of countries
  const [countryData, setCountryData] = useState([]);
  // State of the currently displayed countries
  const [countries, setCountries] = useState([]);
  // State for whether app is in light mode
  const [isLightMode, setIsLightMode] = useState(true);

  // Styles for the brightness mode
  const modeStyle = {
    backgroundColor: isLightMode ? "var(--white)" : "var(--veryDarkBlue)",
    color: isLightMode ? "var(--veryDarkBlue)" : "var(--white)",
  };

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
    <div className="App" style={ modeStyle }>
      <ModeContext.Provider value={ {isLightMode, setIsLightMode} }>
        <Navbar />
        <BrowserRouter basename={ `/rest-countries` }>
            <Routes>
              <Route exact path="/" element={ <Home countryData={ countryData } countries={ countries } setCountries={ setCountries } /> } />
              <Route exact path="/alpha">
                <Route exact path=":code" element={ <Detail /> } />
              </Route>
            </Routes>
        </BrowserRouter>
      </ModeContext.Provider>
    </div>
  );
}

export default App;
