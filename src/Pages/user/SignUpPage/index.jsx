import Swal from "sweetalert2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { postUserData } from "apis/user";
import Logo from "assets/icons/logo.svg";
import "./styles.scss";

export default function SignUpPage() {
  const [data, setData] = useState({});
  const [avatarPreview, setAvatarPreview] = useState();
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setData({
      ...data,
      name: e.target.value,
    });
  };

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

  const handleAvatarChange = (e) => {
    const [file] = e.target.files;

    setAvatarPreview(URL.createObjectURL(file));
    setData({
      ...data,
      avatar: file,
    });
  };

  const showAvatarPreview = () => {
    if (avatarPreview) {
      return (
        <img
          src={avatarPreview}
          width="80"
          height="80"
          className="d-block rounded-circle mb-3"
          alt=""
        />
      );
    }
  };

  const handleSignInButton = (e) => {
    e.preventDefault();

    navigate("/sign-in");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("avatar", data.avatar);

    const response = await postUserData(formData);

    if (response.status === "success") {
      Swal.fire({
        title: "Success!",
        text: "Success register account",
        icon: "success",
        confirmButtonText: "OK!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/sign-in");
        }
      });
    }
  };

  return (
    <div className="sign-up-page">
      <div className="logo">
        <img src={Logo} width="60" height="60" alt="" />
      </div>
      <div className="title">
        <h2>Sign Up</h2>
        <p>Daftar dan bergabung dengan kami</p>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-name">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            placeholder="Write your name"
            onChange={handleNameChange}
            required
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
            onChange={handleEmailChange}
            required
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
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="form-group mb-5">
          <label htmlFor="avatar" className="form-label">
            Avatar
          </label>
          {avatarPreview && showAvatarPreview()}
          <input
            type="file"
            name="avatar"
            id="avatar"
            className="form-control"
            onChange={handleAvatarChange}
          />
        </div>

        <div className="buttons">
          <button type="submit" className="btn btn-continue d-block">
            Complete Sign Up
          </button>
          <button
            className="btn btn-sign-in d-block"
            onClick={handleSignInButton}
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
