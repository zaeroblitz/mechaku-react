import React from "react";
import Sidebar from "components/admin/Sidebar";
import BrandsPageComponents from "components/admin/BrandsPage";
import "./styles.css";

export default function AdminBrandsPage() {
  return (
    <div className="admin-brands-page w-100 h-100 d-flex">
      <Sidebar currentPage="brands" />
      <BrandsPageComponents />
    </div>
  );
}
