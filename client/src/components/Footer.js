import React from "react";
import { Link } from "react-router-dom";
import './footer.css'

function Footer() {
  return (
    <div className="footer-div">
      <Link to="/pages/about" className="">
        About
      </Link>
    </div>
  );
}

export default Footer;
