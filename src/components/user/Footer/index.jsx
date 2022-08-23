import React from "react";
import logo from "assets/icons/logo_white.svg";
import "./styles.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-list row">
        <div className="col-12 col-md-3 mt-3 mt-md-0">
          <div className="footer-mechaku">
            <img src={logo} className="footer-mechaku-logo" alt="" />
            <p className="footer-mechaku-tagline">
              Mechaku membantu dalam menyediakan mecha kesukaanmu
            </p>
          </div>
        </div>
        <div className="col-12 col-md-3 mt-3 mt-md-0">
          <div className="footer-item">
            <h5>Company</h5>
            <p>About Us</p>
            <p>Press Release</p>
            <p>Terms of Use</p>
            <p>Privacy & Policy</p>
          </div>
        </div>
        <div className="col-12 col-md-3 mt-3 mt-md-0">
          <div className="footer-item">
            <h5>Support</h5>
            <p>Refund Policy</p>
            <p>Unlock Rewards</p>
            <p>Live Chatting</p>
          </div>
        </div>
        <div className="col-12 col-md-3 mt-3 mt-md-0">
          <div className="footer-item">
            <h5>Connect</h5>
            <p>hi@mechaku.gg</p>
            <p>team@mechaku.gg</p>
            <p>Depok, Jawa Barat</p>
            <p>0812-3456-7890</p>
          </div>
        </div>
      </div>

      <p className="footer-copyright text-center">
        Copyright 2022. All Rights Reserved.
      </p>
    </div>
  );
}
