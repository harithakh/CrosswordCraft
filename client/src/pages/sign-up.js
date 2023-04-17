import React from "react";
import { useState } from "react";
import axios from "axios";

import "./form-styles.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/register",
        { email, username, password }
      );
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
            Email:
            <input
              className="input-styles"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="lable-styles">
            Username:
            <input
              className="input-styles"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label className="lable-styles">
            Password:
            <input
              className="input-styles"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className="button-style" type="submit">
            Sign up
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
