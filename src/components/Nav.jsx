import { Link } from "react-router";
import {useContext}  from "react";
import {ThemeContext} from "../context.js";
import "../styles/nav.css";

//--------------Navigation Component--------------------
export default function Nav (props) {
    const {theme,toggleTheme} = useContext(ThemeContext);
  return (
    <nav className={ `nav ${theme}`}>
     <h1 >Cat Explorer</h1>


    <div className="nav">
      <Link to="/">Home</Link>
       
      <Link to="/favorites">Favorites</Link>

    <button className="theme" onClick={toggleTheme} >
        {theme === "light" ? "Dark Mode": "light Mode"}
        </button> 
    </div>
    </nav>
  );
}