import "./css/Search.css";

const Search = () => {
    return (
        <div className="Search">
            <form>
                <div className="search-col">
                    <input
                        type="text"
                        name="country"
                        id="country"
                        placeholder="Search for a country..."
                        onChange={ (e) => console.log(e.target.value) }
                    />
                </div>
                <div className="search-col">
                    <select name="filter" id="filter">
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