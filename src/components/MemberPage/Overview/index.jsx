import React from "react";
import LatestTransactions from "./LatestTransactions";
import "./styles.css";
import TotalSpent from "./TotalSpent";

export default function Overview() {
  return (
    <div className="overview-content col-lg-8">
      <h1 className="overview-title">Overview</h1>
      <TotalSpent />
      <LatestTransactions />
    </div>
  );
}
