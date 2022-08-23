import React from "react";
import Overview from "components/member/Overview";
import Sidebar from "components/member/Sidebar";
import "./styles.css";

export default function OverviewPage() {
  return (
    <div className="member-overview w-100 h-100 d-flex">
      <Sidebar currentPage="overview" />
      <Overview />
    </div>
  );
}
