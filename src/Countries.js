import "./css/Countries.css";

const Countries = ({ countries }) => {
    // If still loading countries data from API fetch
    if (countries.length === 0) return <h2 style={ {marginLeft: `5rem`} }>Loading...</h2>

    return (
        <div className="Countries">

            {
                countries.map((country) => (
                    <div className="country-container" key={ country.numericCode }>
                        <div className="country-flag">
                            <img src={ country.flag } alt="country-flag" />
                        </div>
                        <div className="country-stats">
                            <h2>{ country.name }</h2>
                            <ul>
                                <li><span>Population:</span> { country.population }</li>
                                <li><span>Region:</span> { country.region }</li>
                                <li><span>Capital:</span> { country.capital }</li>
                            </ul>
                        </div>
                    </div>
                ))
            }
            
        </div>
    );
}

export default Countries;