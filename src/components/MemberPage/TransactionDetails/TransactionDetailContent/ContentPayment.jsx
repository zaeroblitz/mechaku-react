import React from "react";

export default function ContentPayment() {
  return (
    <div className="content-payment">
      <p className="content-payment-header">Payment Details</p>
      <div className="content-payment-value d-flex justify-content-between">
        <p className="label">Type</p>
        <p className="value">Transfer</p>
      </div>
      <div className="content-payment-value d-flex justify-content-between">
        <p className="label">Bank Name</p>
        <p className="value">Bank XYZ</p>
      </div>
      <div className="content-payment-value d-flex justify-content-between">
        <p className="label">Bank Account Name</p>
        <p className="value">Zaero Blitz</p>
      </div>
      <div className="content-payment-value d-flex justify-content-between">
        <p className="label">Bank Number</p>
        <p className="value">1900-2022-1945</p>
      </div>
      <div className="content-payment-value d-flex justify-content-between">
        <p className="label">Price</p>
        <p className="value price">Rp 1.190.000</p>
      </div>
    </div>
  );
}
