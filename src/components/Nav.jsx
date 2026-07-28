import { Link } from "react-router";
import {useContext}  from "react";
import {ThemeContext} from "../context.js";
import "../styles/App.css";

//--------------Navigation Component--------------------
export default function Nav (props) {
    const {theme,toggleTheme} = useContext(ThemeContext);
  return (
    <nav className="bg-mist-800 text-white text-2xl">
     <h1 className="">Cat Explorer</h1>


    <div className="underline flex ">
      <Link to="/">Home</Link>
       
      <Link to="/favorites">Favorites</Link>
    </div>
    <button className="theme" onClick={toggleTheme} >
        {theme === "light" ? "Dark Mode": "light Mode"}
    </button> 
    </nav>
  );
}