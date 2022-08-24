import React from "react";
import Sidebar from "components/admin/Sidebar";
import "./styles.css";
import EditGradeComponents from "components/admin/GradesPage/EditGrade";

export default function AdminEditGradePage() {
  return (
    <div className="admin-grade-page w-100 h-100 d-flex">
      <Sidebar currentPage="grades" />
      <EditGradeComponents />
    </div>
  );
}
