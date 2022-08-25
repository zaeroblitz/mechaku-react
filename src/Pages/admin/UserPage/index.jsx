import React from "react";
import Sidebar from "components/admin/Sidebar";
import UserPageComponents from "components/admin/UserPage";
import "./styles.css";

export default function AdminUserPage() {
  return (
    <div className="admin-users w-100 h-100 d-flex">
      <Sidebar currentPage={"users"} />
      <UserPageComponents />
    </div>
  );
}
