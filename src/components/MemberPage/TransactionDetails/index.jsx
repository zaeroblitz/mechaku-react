import React from "react";
import "./styles.css";
import TransactionDetailContent from "./TransactionDetailContent";
import TransactionDetailHeader from "./TransactionDetailHeader";

export default function TransactionDetailComponents() {
  return (
    <div className="transaction-detail-container col-lg-8">
      <TransactionDetailHeader />
      <TransactionDetailContent />
    </div>
  );
}
