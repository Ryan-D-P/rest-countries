import { ModeContext } from "./App";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./css/Detail.css";
import backIcon from "./images/back-icon.svg";
import backIconDark from "./images/back-icon-dark.svg";

const Detail = () => {
    const { isLightMode } = useContext(ModeContext);

    // Styles for the brightness mode
    const modeStyle = {
        color: isLightMode ? "var(--veryDarkBlue)" : "var(--white)",
    };

    const { code } = useParams();
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getCountry = async () => {
            try {
                const response = await fetch(`https://restcountries.com/v2/alpha/${code}`);

                if (!response.ok) throw new Error(`404 - No country with this code exists.`);

                const data = await response.json();
                setCountry(data);
                setError(false);
                setLoading(false);
            }
            catch (err) {
                setError(true);
                setLoading(false);
            }
        };

        getCountry();
    }, [code]);

    if (error) return <h2 style={ {marginLeft: `5rem`} } >404 - No country with this code exists.</h2>;
    else if (loading) return <h2 style={ {marginLeft: `5rem`} }>Loading...</h2>;

    return (
        <div className="Detail">
            <div className="back-wrapper">
                <Link to="/" className="back">
                    <img src={ isLightMode ? backIcon : backIconDark } alt="back-icon" />
                    <p style={ modeStyle }>Back</p>
                </Link>
            </div>
            <div className="country-detail">
                <div className="detail-flag-wrapper">
                    <img src={ country.flag } alt="country-flag" />
                </div>
                <div className="detail-stats-wrapper">
                    <h2>{ country.name }</h2>
                    <div className="detail-stats">
                        <ul>
                            <li><span>Native name:</span> { country.nativeName }</li>
                            <li><span>Population:</span> { country.population.toLocaleString() }</li>
                            <li><span>Region:</span> { country.region }</li>
                            <li><span>Sub Region:</span> { country.subregion }</li>
                            <li><span>Capital:</span> { country.capital }</li>
                        </ul>
                        <ul>
                            <li><span>Top Level Domain:</span> { country.topLevelDomain[0] }</li>
                            <li><span>Currencies:</span> { country.currencies.map(curr => curr.name).join(`, `) }</li>
                            <li><span>Languages:</span> { country.languages.map(lang => lang.name).join(`, `) }</li>
                        </ul>
                    </div>
                    <div className="border-countries">
                        <p>Border Countries:</p>
                        <ul>
                            {
                                country.borders ?
                                    country.borders.map(country => (
                                        <Link to={ `/alpha/${country}/` } key={ country } style={ modeStyle }>
                                            <li className="border-country">{ country }</li>
                                        </Link>
                                    ))
                                    : <p>None.</p>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;