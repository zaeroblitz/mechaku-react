import React from "react";
import Logo from "assets/icons/logo.svg";
import "./styles.css";

export default function SignInForm() {
  return (
    <div className="col-lg-6 d-flex">
      <div className="sign-in-form">
        <div className="logo">
          <img src={Logo} width="60" height="60" alt="" />
        </div>
        <div className="title">
          <h2>Sign In</h2>
          <p>Masuk untuk mencari mecha kesukaanmu</p>
        </div>
        <div className="form">
          <div className="form-email">
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              id="email"
              className="form-control"
              placeholder="Enter Your Email Address"
            />
          </div>
          <div className="form-password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Your Password"
            />
          </div>
        </div>
        <div className="buttons">
          <a className="btn btn-sign-in d-block" href="/">
            Continue to Sign In
          </a>
          <a className="btn btn-sign-up d-block" href="/sign-up">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
