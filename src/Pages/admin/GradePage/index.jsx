import React from "react";
import Sidebar from "components/admin/Sidebar";
import GradesPageComponent from "components/admin/GradesPage";
import "./styles.css";

export default function AdminGradesPage() {
  return (
    <div className="admin-grade-page w-100 h-100 d-flex">
      <Sidebar currentPage="grades" />
      <GradesPageComponent />
    </div>
  );
}
