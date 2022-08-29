import React from "react";
import { useNavigate } from "react-router-dom";

import TransactionStatusList from "./TransactionStatusList";
import "./styles.css";

export default function TransactionStatusPageComponents() {
  const navigate = useNavigate();

  const onAddButtonClick = (e) => {
    e.preventDefault();

    navigate("/admin/transaction-status/create");
  };

  return (
    <div className="transaction-status-page-container col-lg-8">
      <h2 className="title">Transaction Status</h2>
      <div className="add-transaction-status mb-5">
        <button
          className="btn btn-primary btn-add-transaction-status"
          onClick={onAddButtonClick}
        >
          Add New Transaction Status
        </button>
      </div>
      <TransactionStatusList />
    </div>
  );
}
