import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./form-styles.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", {
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="form-div">
        <form className="form-style" onSubmit={handleSubmit}>
          <label className="lable-styles">
            Username :
            <input
              className="input-styles"
              type="email"
              name="emailOrUsername"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="lable-styles">
            Password :
            <input
              className="input-styles"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
