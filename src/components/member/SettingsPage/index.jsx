import React from "react";
import pic from "../../../assets/images/pic.png";
import "./styles.css";

export default function SettingsComponent() {
  return (
    <div className="settings-container col-lg-5">
      <h2 className="settings-header">Settings</h2>
      <div className="settings-form">
        <div className="form-avatar">
          <img src={pic} width="90" height="90" alt="" />
        </div>
        <div className="form-upload">
          <input type="file" name="upload" className="form-file form-control" />
        </div>
        <div className="form-input form-name">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Write Your Full Name"
          />
        </div>
        <div className="form-input form-email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter Your Email Address"
          />
        </div>
        <div className="form-input form-phone">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name="phone"
            className="form-control"
            placeholder="Your Phone Number"
          />
        </div>
        <div className="form-button">
          <a href="/" className="btn btn-save">
            Save Changes
          </a>
        </div>
      </div>
    </div>
  );
}
