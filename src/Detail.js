import "./css/Detail.css";

const Detail = () => {
    return (
        <div className="Detail">
            <div className="back-wrapper">
                <div className="back">
                    <p>back-icon.svg</p>
                    <p>Back</p>
                </div>
            </div>
            <div className="country-detail">
                <div className="detail-flag-wrapper">
                    <p>FLAG.png</p>
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