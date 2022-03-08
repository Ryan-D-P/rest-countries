import Navbar from "./Navbar";
import Search from "./Search";
import Countries from "./Countries";
import Detail from "./Detail";
import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      // https://restcountries.com/#api-endpoints-v2
      const response = await fetch(`https://restcountries.com/v2/all`);
      const data = await response.json();
      setCountries(data);
    };

    getCountries();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Search />
      <Countries countries={ countries } />
    </div>
  );
}

export default App;
