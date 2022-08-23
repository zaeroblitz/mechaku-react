import React from "react";
import "./styles.css";
import TransactionsHeader from "./TransactionsHeader";
import TransactionsStatusSelector from "./TransactionsStatusSelector";
import TransactionsTable from "./TransactionsTable";

export default function TransactionComponents() {
  return (
    <div className="transactions-content">
      <TransactionsHeader />
      <TransactionsStatusSelector />
      <TransactionsTable />
    </div>
  );
}
