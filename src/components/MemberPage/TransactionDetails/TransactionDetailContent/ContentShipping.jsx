import React from "react";

export default function ContentShipping() {
  return (
    <div className="content-shipping">
      <p className="content-shipping-header">Shipping Details</p>
      <div className="content-shipping-value d-flex justify-content-between">
        <p className="label">Name</p>
        <p className="value">Zaero Blitz</p>
      </div>
      <div className="content-shipping-value d-flex justify-content-between">
        <p className="label">Email</p>
        <p className="value">zaeroblitz@email.com</p>
      </div>
      <div className="content-shipping-value d-flex justify-content-between">
        <p className="label">Address</p>
        <p className="value address">
          JL. Nusantara Raya GG. H.Encat No.19 Rt.03 Rw.13 Beji, Depok
        </p>
      </div>
      <div className="content-shipping-value d-flex justify-content-between">
        <p className="label">Phone Number</p>
        <p className="value">0812-3456-7890</p>
      </div>
      <div className="content-shipping-value d-flex justify-content-between">
        <p className="label">Courier</p>
        <p className="value">Si Gesits</p>
      </div>
    </div>
  );
}
