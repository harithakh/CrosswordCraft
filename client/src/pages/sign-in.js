import React from "react";
import { Link } from "react-router-dom";

import "./form-styles.css";

function SignIn() {
  return (
    <>
      <div className="form-div">
        <form className="form-style">
          <label className="lable-styles">
            Username :
            <input
              className="input-styles"
              type="text"
              name="emailOrUsername"
            />
          </label>
          <label className="lable-styles">
            Password :
            <input className="input-styles" type="password" name="password" />
          </label>
          <button className="button-style" type="submit">
            Sign in
          </button>
          <div>
            <label>Dont have an accout? </label>
            <Link className="sign-up-link" to="/pages/sign-up">
              Sign up
            </Link>
            
          </div>
        </form>
      </div>
    </>
  );
}

export default SignIn;
