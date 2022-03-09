import "./css/Search.css";
import { useEffect, useState } from "react";
import searchIcon from "./images/search-icon.svg";

const Search = ({ countryData, setCountries }) => {
    const [search, setSearch] = useState(``);
    const [continent, setContinent] = useState(`Africa`);

    useEffect(() => {
        // Set countries state to filtered array with name matching search pattern
        setCountries(countryData.filter(country => new RegExp(search, 'i').test(country.name)));
    }, [search]);

    return (
        <div className="Search">
            <form>
                <div className="search-col">
                    <img src={ searchIcon } alt="search-icon.svg" />
                    <input
                        type="text"
                        name="country"
                        id="country"
                        placeholder="Search for a country..."
                        value={ search }
                        onChange={ (e) => setSearch(e.target.value) }
                    />
                </div>
                <div className="search-col">
                    <select name="filter" id="filter" value={ continent } onChange={ (e) => setContinent(e.target.value) }>
                        <option value="Africa">Africa</option>
                        <option value="America">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
            </form>
        </div>
    );
}

export default Search;