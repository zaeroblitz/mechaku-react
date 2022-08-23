import React from "react";
import StatusSelectorItem from "./StatusSelectorItem";

export default function TransactionsStatusSelector() {
  return (
    <div className="transactions-status-selector d-flex">
      <StatusSelectorItem label="All Trx" isActive />
      <StatusSelectorItem label="Success" />
      <StatusSelectorItem label="Pending" />
      <StatusSelectorItem label="Failed" />
    </div>
  );
}
