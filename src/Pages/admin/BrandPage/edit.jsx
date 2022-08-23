import React from "react";
import Sidebar from "components/admin/Sidebar";
import EditBrandsComponents from "components/admin/BrandsPage/EditBrands";
import "./styles.css";

export default function AdminEditBrandsPage() {
  return (
    <div className="admin-brands-page w-100 h-100 d-flex">
      <Sidebar currentPage="brands" />
      <EditBrandsComponents />
    </div>
  );
}
