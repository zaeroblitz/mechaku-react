import React from "react";
import Sidebar from "components/admin/Sidebar";
import EditCategoryComponents from "components/admin/CategoriesPage/EditCategory";
import "./style.css";

export default function AdminEditCategoryPage() {
  return (
    <div className="admin-category-page w-100 h-100 d-flex">
      <Sidebar currentPage="categories" />
      <EditCategoryComponents />
    </div>
  );
}
