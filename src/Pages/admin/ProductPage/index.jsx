import React from "react";
import Sidebar from "components/admin/Sidebar";
import ProductPageComponents from "components/admin/ProductPage";
import "./styles.css";

export default function AdminProductPage() {
  return (
    <div className="admin-products w-100 h-100 d-flex">
      <Sidebar currentPage="products" />
      <ProductPageComponents />
    </div>
  );
}
