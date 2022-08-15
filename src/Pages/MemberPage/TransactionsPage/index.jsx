import React from "react";
import Sidebar from "../../../components/MemberPage/Sidebar";
import TransactionComponents from "../../../components/MemberPage/Transactions";
import "./styles.css";

export default function TransactionsPage() {
  return (
    <div className="member-transactions w-100 h-100 d-flex">
      <Sidebar currentPage="transactions" />
      <TransactionComponents />
    </div>
  );
}
