import React from "react";
import ContentHeader from "./ContentHeader";
import ContentShipping from "./ContentShipping";
import ContentPayment from "./ContentPayment";
import ContentButton from "./ContentButton";

export default function TransactionDetailContent() {
  return (
    <div className="transaction-detail-content">
      <ContentHeader />
      <hr />
      <ContentShipping />
      <ContentPayment />
      <ContentButton />
    </div>
  );
}
