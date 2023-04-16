import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";


function NavBar() {
  return (
    <nav className="nav">
      <Link to="/" className="">
        Home
      </Link>
      <Link to="/pages/create-puzzle" className="">
        Create Puzzle
      </Link>
      <Link to="/pages/howto" className="">
        How To
      </Link>
      
    </nav>
  );
}

export default NavBar;
