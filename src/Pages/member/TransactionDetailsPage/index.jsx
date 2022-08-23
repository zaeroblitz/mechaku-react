import React from "react";
import Sidebar from "components/member/Sidebar";
import TransactionDetailComponents from "components/member/TransactionDetails";
import "./styles.css";

export default function TransactionDetailsPage() {
  return (
    <div className="member-transaction-details w-100 h-100 d-flex">
      <Sidebar currentPage="transactions" />
      <TransactionDetailComponents />
    </div>
  );
}
