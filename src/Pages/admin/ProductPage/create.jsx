import React from "react";
import Sidebar from "components/admin/Sidebar";
import CreateProductComponents from "components/admin/ProductPage/CreateProduct";
import "./styles.css";

export default function AdminCreateProductPage() {
  return (
    <div className="admin-products w-100 h-100 d-flex">
      <Sidebar currentPage="products" />
      <CreateProductComponents />
    </div>
  );
}
