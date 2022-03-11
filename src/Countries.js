import { ModeContext } from "./App";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./css/Countries.css";

const Countries = ({ countries }) => {
    const { isLightMode } = useContext(ModeContext);

    // Styles for the brightness mode
    const modeStyle = {
        color: isLightMode ? "var(--veryDarkBlue)" : "var(--white)",
    };

    // If still loading countries data from API fetch
    if (countries.length === 0) return <h2 style={ {marginLeft: `5rem`} }>Loading...</h2>;

    return (
        <div className="Countries">
            {
                countries.map((country) => (
                    <Link to={ `/alpha/${country.alpha2Code}/` } key={ country.alpha2Code } className="country-container" style={ modeStyle }>
                        <div className="country-flag">
                            <img src={ country.flag } alt="country-flag" />
                        </div>
                        <div className="country-stats">
                            <h2>{ country.name }</h2>
                            <ul>
                                <li><span>Population:</span> { country.population.toLocaleString() }</li>
                                <li><span>Region:</span> { country.region }</li>
                                <li><span>Capital:</span> { country.capital }</li>
                            </ul>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
}

export default Countries;