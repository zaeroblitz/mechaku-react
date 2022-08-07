import React from "react";
import SuccessIcon from "../../assets/icons/success-icon.png";
import "./styles.css";

export default function SuccessPage() {
  return (
    <div className="success-container">
      <div className="success-content">
        <div className="success-content-title">
          <div className="d-flex flex-column justify-content-center text-center">
            <img src={SuccessIcon} width="88" height="80" alt="" />
            <h2>Your Order Is Complete!</h2>
            <p>
              Thank you for your order! Your order is being processed and will
              be completed within 3-6 hours. You will receive an email
              confirmation when your order is completed.
            </p>
          </div>
        </div>
        <div className="success-content-buttons">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <a className="btn btn-dashboard" href="/">
              My Dashboard
            </a>
            <a className="btn btn-shop" href="/shop">
              Back to Shopping
            </a>
          </div>
        </div>
      </div>
      <footer>
        <p>2022 Copyright Mechaku. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
