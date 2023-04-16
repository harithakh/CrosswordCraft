import React from "react";

import './form-styles.css';

function SignUp() {
  return (
    <>
      <div  className="form-div">
        <form className="form-style">
          <label className="lable-styles">
            Email:
            <input className="input-styles" type="email" name="email" />
          </label>
          <label className="lable-styles">
            Username:
            <input className="input-styles" type="text" name="username" />
          </label>
          <label className="lable-styles">
            Password:
            <input className="input-styles" type="password" name="password" />
          </label>
          <button className="button-style" type="submit">Sign up</button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
