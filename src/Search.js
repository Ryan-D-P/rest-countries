import "./css/Search.css";
import { useEffect, useState } from "react";
import searchIcon from "./images/search-icon.svg";

const Search = ({ countryData, setCountries }) => {
    const [search, setSearch] = useState(``);
    const [region, setRegion] = useState(``);

    // Set countries state with name matching search pattern and matching selected region
    useEffect(() => {
        setCountries(countryData.filter(country => new RegExp(search, 'i').test(country.name) && (region === country.region || region === ``)));
    }, [search, region]);

    return (
        <div className="Search">
            <div className="search-col text-col">
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
            <div className="search-col select-col">
                <select name="filter" id="filter" value={ region } onChange={ (e) => setRegion(e.target.value) }>
                    <option value="" disabled hidden>Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </div>
    );
}

export default Search;