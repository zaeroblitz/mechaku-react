import React from "react";
import Logo from "../../../assets/icons/logo.svg";

export default function TotalSpent() {
  return (
    <div className="overview-total-spent">
      <div className="total-spent-header d-flex align-items-center">
        <img src={Logo} width="60" height="60" alt="" />
        <h4>Mechaku</h4>
      </div>
      <div className="total-spent-value">
        <p>Total Spent</p>
        <h4>Rp. 18.921.123</h4>
      </div>
    </div>
  );
}
