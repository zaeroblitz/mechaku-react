import React from "react";
import TransactionsHeader from "./TransactionsHeader";
import TransactionsStatusSelector from "./TransactionsStatusSelector";
import TransactionsTable from "./TransactionsTable";
import "./styles.scss";

export default function TransactionComponents() {
  return (
    <div className="transactions-content col-8">
      <TransactionsHeader />
      <TransactionsStatusSelector />
      <TransactionsTable />
    </div>
  );
}
