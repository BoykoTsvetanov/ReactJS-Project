import React from "react";
import "./Login.css";

import { loginUser } from "../../models/user";

import { saveUserInfo } from "../../config/auth";

const Login = ({ history }) => {
  const OnSubmitLoginHandler = (e) => {
    e.preventDefault();

    const email = e.target.username.value;
    const password = e.target.password.value;

    loginUser(email, password).then((userInfo) => {
      saveUserInfo(email, password);
      history.push("/");
    });
  };

  return (
    <div className="container">
      <form onSubmit={OnSubmitLoginHandler}>
        <div className="header">Login</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username"></input>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="password"
              ></input>
            </div>
          </div>
        </div>

        <input
          className="button"
          type="submit"
          className="submit"
          value="Login"
        />
      </form>
    </div>
  );
};

export default Login;
