import React from "react";
import Sidebar from "components/admin/Sidebar";
import CategoriesPageComponent from "components/admin/CategoriesPage";
import "./style.css";

export default function AdminCategoriesPage() {
  return (
    <div className="admin-category-page w-100 h-100 d-flex">
      <Sidebar currentPage="categories" />
      <CategoriesPageComponent />
    </div>
  );
}
