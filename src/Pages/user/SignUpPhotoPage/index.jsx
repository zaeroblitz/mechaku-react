import React from "react";
import UploadIcon from "assets/icons/upload_button.png";
import "./styles.css";

export default function SignUpPhotoPage() {
  const data = JSON.parse(localStorage.getItem("user-data"));

  return (
    <div className="sign-up-photo-page">
      <div className="logo">
        <img src={UploadIcon} width="100" height="100" alt="" />
      </div>
      <div className="user-data">
        <h2>{data.name}</h2>
        <p>{data.email}</p>
      </div>
    </div>
  );
}
