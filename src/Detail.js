import { useParams } from "react-router-dom";
import "./css/Detail.css";
import backIcon from "./images/back-icon.svg";

const Detail = ({ countries }) => {
    const { code } = useParams();

    const country = countries.find(country => country.alpha2Code === code.toUpperCase());

    // No country with the route code exists
    if (!country) return <h2 style={ {marginLeft: `5rem`} } >404 - No country with this code exists.</h2>;

    return (
        <div className="Detail">
            <div className="back-wrapper">
                <div className="back">
                    <img src={ backIcon } alt="back-icon" />
                    <p>Back</p>
                </div>
            </div>
            <div className="country-detail">
                <div className="detail-flag-wrapper">
                    <img src={ country.flag } alt="country-flag" />
                </div>
                <div className="detail-stats-wrapper">
                    <h2>Belgium</h2>
                    <div className="detail-stats">
                        <ul>
                            <li>Native name: Belgie</li>
                            <li>Population: 11,319,511</li>
                            <li>Region: Europe</li>
                            <li>Sub Region: Western Europe</li>
                            <li>Capital: Brussels</li>
                        </ul>
                        <ul>
                            <li>Top Level Domain: .be</li>
                            <li>Currencies: Euro</li>
                            <li>Languages: Dutch, French, German</li>
                        </ul>
                    </div>
                    <div className="border-countries">
                        <p>Border Countries:</p>
                        <ul>
                            <li className="border-country">France</li>
                            <li className="border-country">Germany</li>
                            <li className="border-country">Netherlands</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;