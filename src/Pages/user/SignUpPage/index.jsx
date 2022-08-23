import React from "react";
import { Link } from "react-router-dom";
import Logo from "assets/icons/logo.svg";
import "./styles.css";

export default function SignUpPage() {
  return (
    <div className="sign-up-page">
      <div className="logo">
        <img src={Logo} width="60" height="60" alt="" />
      </div>
      <div className="title">
        <h2>Sign Up</h2>
        <p>Daftar dan bergabung dengan kami</p>
      </div>
      <div className="form">
        <div className="form-name">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            placeholder="Write your name"
          />
        </div>
        <div className="form-email">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="Enter your email address"
          />
        </div>
        <div className="form-password">
          <label htmlFor="name">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            placeholder="Your password"
          />
        </div>
      </div>
      <div className="buttons">
        <Link to="/sign-up-photo" className="btn btn-continue d-block">
          Continue
        </Link>
        <a href="/sign-in" className="btn btn-sign-in d-block">
          Sign In
        </a>
      </div>
    </div>
  );
}
