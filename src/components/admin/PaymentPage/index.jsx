import React from "react";
import { useNavigate } from "react-router-dom";

import PaymentList from "./PaymentList";
import "./styles.css";

export default function PaymentPageComponents() {
  const navigate = useNavigate();

  const onAddButtonClick = (e) => {
    e.preventDefault();

    navigate("/admin/payments/create");
  };

  return (
    <div className="payments-page-container col-lg-8">
      <h2 className="title">Payments</h2>
      <div className="add-payments mb-5">
        <button
          className="btn btn-primary btn-add-payment"
          onClick={onAddButtonClick}
        >
          Add New Payment
        </button>
      </div>
      <PaymentList />
    </div>
  );
}
