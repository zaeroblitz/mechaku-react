import React from "react";
import Sidebar from "components/admin/Sidebar";
import "./styles.css";
import CreateGradeComponents from "components/admin/GradesPage/CreateGrade";

export default function AdminCreateGradePage() {
  return (
    <div className="admin-grade-page w-100 h-100 d-flex">
      <Sidebar currentPage="grades" />
      <CreateGradeComponents />
    </div>
  );
}
