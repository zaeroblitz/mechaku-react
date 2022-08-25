import React from "react";
import Sidebar from "components/admin/Sidebar";
import EditProductComponents from "components/admin/ProductPage/EditProduct";
import "./styles.css";

export default function AdminEditProductPage() {
  return (
    <div className="admin-products w-100 h-100 d-flex">
      <Sidebar currentPage="products" />
      <EditProductComponents />
    </div>
  );
}
