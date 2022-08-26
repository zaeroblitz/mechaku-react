import React, { useEffect } from "react";
import Sidebar from "components/admin/Sidebar";
import ProductPageComponents from "components/admin/ProductPage";
import "./styles.css";

export default function AdminProductPage() {
  useEffect(() => {
    document.title = "Mechaku Admin | Products";
  }, []);

  return (
    <div className="admin-products w-100 h-100 d-flex">
      <Sidebar currentPage="products" />
      <ProductPageComponents />
    </div>
  );
}
