import "./css/Navbar.css";
import moonIcon from "./images/moon-icon.svg";

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="nav-col">
                <h1>Where in the world?</h1>
            </div>
            <div className="nav-col mode-change">
                <img src={ moonIcon } alt="moon-icon.svg" />
                <p>Dark Mode</p>
            </div>
        </div>
    );
}

export default Navbar;