import React from "react";
import Sidebar from "components/admin/Sidebar";
import CreateBrandsComponents from "components/admin/BrandsPage/CreateBrand";
import "./styles.css";

export default function AdminCreateBrandsPage() {
  return (
    <div className="admin-brands-page w-100 h-100 d-flex">
      <Sidebar currentPage="brands" />
      <CreateBrandsComponents />
    </div>
  );
}
