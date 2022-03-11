import { ModeContext } from "./App";
import { useContext } from "react";
import "./css/Navbar.css";
import moonIcon from "./images/moon-icon.svg";
import moonIconDark from "./images/moon-icon-dark.svg";

const Navbar = () => {
    const { isLightMode, setIsLightMode } = useContext(ModeContext);

    return (
        <div className="Navbar">
            <div className="nav-col">
                <h1>Where in the world?</h1>
            </div>
            <div className="nav-col mode-change" onClick={ () => setIsLightMode(!isLightMode) }>
                <img src={ isLightMode ? moonIcon : moonIconDark } alt="moon-icon.svg" />
                <p>Dark Mode</p>
            </div>
        </div>
    );
}

export default Navbar;