import "./css/Countries.css";

const Countries = () => {
    return (
        <div className="Countries">
            <div className="country-container">
                <div className="country-flag">
                    <p>Flag.png</p>
                </div>
                <div className="country-stats">
                    <h2>Germany</h2>
                    <ul>
                        <li>Population: 81,770,900</li>
                        <li>Region: Europe</li>
                        <li>Capital: Berlin</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Countries;