import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

function Header() {
  return (
    <nav className="header-nav">
      <Link to="/" className="site-title">
        CrosswordCraft
      </Link>

      <Link className="sign-in-link" to="/pages/sign-in">
        Sign in
      </Link>
    </nav>
  );
}

export default Header;
