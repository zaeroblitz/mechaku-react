import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "features/auth/authSlice";

import Logo from "assets/icons/logo.svg";
import "./styles.scss";

export default function SignInForm() {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleEmailChange = (e) => {
    setData({
      ...data,
      email: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setData({
      ...data,
      password: e.target.value,
    });
  };

  const handleSignUpButton = (e) => {
    e.preventDefault();

    navigate("/sign-up");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(fetchUser(data));
  };

  useEffect(() => {
    if (auth.isLogin) {
      Swal.fire({
        title: "Success!",
        text: "Login Success",
        icon: "success",
        confirmButtonText: "OK!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      });
    } else if (!auth.isLogin && auth.error) {
      Swal.fire({
        title: "Error!",
        text: `Login Failed: ${auth.error}`,
        icon: "error",
        confirmButtonText: "OK!",
      });
    }
  }, [auth, navigate]);

  return (
    <div className="col-lg-6 d-flex">
      <div className="sign-in-form">
        <form onSubmit={handleSubmit}>
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
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="form-password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Your Password"
                onChange={handlePasswordChange}
                required
              />
            </div>
          </div>
          <div className="buttons">
            <button type="submit" className="btn btn-sign-in w-100">
              Continue to Sign In
            </button>
            <button
              className="btn btn-sign-up w-100"
              onClick={handleSignUpButton}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
