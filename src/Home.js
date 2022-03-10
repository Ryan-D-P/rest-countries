import Search from "./Search";
import Countries from "./Countries";

const Home = ({ countryData, countries, setCountries }) => {
    return (
        <div className="Home">
            <Search countryData={ countryData } setCountries={ setCountries } />
            <Countries countries={ countries } />
        </div>
    );
}

export default Home;