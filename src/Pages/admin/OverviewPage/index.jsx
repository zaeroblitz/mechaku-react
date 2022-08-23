import React from "react";
import Sidebar from "components/admin/Sidebar";
import "./styles.css";

export default function AdminOverviewPage() {
  return (
    <div className="admin-overview w-100 h-100 d-flex">
      <Sidebar currentPage="overview" />
      <h4>Admin Overview Page</h4>
    </div>
  );
}
