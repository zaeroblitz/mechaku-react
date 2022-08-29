import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { setSignIn } from "apis/user";
import Logo from "assets/icons/logo.svg";
import Cookies from "js-cookie";
import "./styles.css";

export default function SignInForm() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const onInputEmailChange = (e) => {
    setData({
      ...data,
      email: e.target.value,
    });
  };

  const onInputPasswordChange = (e) => {
    setData({
      ...data,
      password: e.target.value,
    });
  };

  const onSignUpButtonClick = (e) => {
    e.preventDefault();

    navigate("/sign-up");
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const response = await setSignIn(data);

    if (response.status === "success") {
      const token = response.data.token;
      const tokenBase64 = btoa(token);

      Cookies.set("token", tokenBase64, { expires: 1 });
      Swal.fire({
        title: "Success!",
        text: "Login berhasil",
        icon: "success",
        confirmButtonText: "OK!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      });
    } else {
      Swal.fire({
        title: "Failed!",
        text: response.message,
        icon: "error",
        confirmButtonText: "OK!",
      });
    }
  };

  return (
    <div className="col-lg-6 d-flex">
      <div className="sign-in-form">
        <form onSubmit={onSubmit}>
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
                onChange={onInputEmailChange}
              />
            </div>
            <div className="form-password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Your Password"
                onChange={onInputPasswordChange}
              />
            </div>
          </div>
          <div className="buttons">
            <button type="submit" className="btn btn-sign-in w-100">
              Continue to Sign In
            </button>
            <button
              className="btn btn-sign-up w-100"
              onClick={onSignUpButtonClick}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
