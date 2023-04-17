import React from "react";
import { Link } from "react-router-dom";

function About(){
    return<>
        <p>This is About page</p>
        <Link className="user-ac" to="/pages/useraccount">
        USss
      </Link>
    </>
}

export default About;