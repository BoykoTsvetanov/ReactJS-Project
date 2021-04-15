import React from "react";
import "./Register.css";
import { registerUser } from "../../models/user";
import { saveUserInfo } from "../../config/auth";
function Register({ history }) {
  const onLoginSubmitHandlr = (e) => {
    e.preventDefault();
    const email = e.target.username.value;
    const password = e.target.password.value;

    registerUser(email, password).then((userInfo) => {
      saveUserInfo(email, password);
      history.push("/");
    });
  };

  return (
    <section className="container-reg">
      <form onSubmit={onLoginSubmitHandlr}>
        <div className="header-reg">Register</div>
        <div className="content-reg">
          <div className="form-reg">
            <div className="form-group-reg">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username"></input>
            </div>
            <div className="form-group-reg">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="password"
              ></input>
            </div>
            <div className="form-group-reg">
              <label htmlFor="rPassword">rPassword</label>
              <input
                type="password"
                name="repeatPassword"
                placeholder="repeatPassword"
              ></input>
            </div>
          </div>
        </div>
        <footer className="footer-reg">
          <input
            className="buttonReg"
            type="submit"
            className="submitReg"
            value="Register"
          />
        </footer>
      </form>
    </section>
  );
}

export default Register;
