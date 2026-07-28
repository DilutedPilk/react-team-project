import { Link } from "react-router";
import { useContext } from "react";
import { ThemeContext } from "../context.js";
import "../styles/App.css";

//--------------Navigation Component--------------------
export default function Nav(props) {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <nav className="bg-mist-800 text-white text-2xl flex drop-shadow-xl">
            <h1 className="m-5">Cat Explorer</h1>
            <div className="ml-auto">
                <Link className="p-5 w-full hover:bg-mist-600" to="/">Home</Link>
                <Link className="p-5 hover:bg-mist-600" to="/favorites">Favorites</Link>
                <button className="p-5 hover:bg-mist-600 w-max" onClick={toggleTheme} >
                    {theme === "light" ? "Dark Mode" : "Light Mode"}
                </button>
            </div>
        </nav>
    );
}