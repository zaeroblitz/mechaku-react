import React from "react";
import Overview from "../../../components/MemberPage/Overview";
import Sidebar from "../../../components/MemberPage/Sidebar";
import "./styles.css";

export default function OverviewPage() {
  return (
    <div className="member-overview w-100 h-100 d-flex">
      <Sidebar currentPage="overview" />
      <Overview />
    </div>
  );
}
