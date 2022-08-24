import React from "react";
import Sidebar from "components/admin/Sidebar";
import CreateCategoryComponents from "components/admin/CategoriesPage/CreateCategory";
import "./style.css";

export default function AdminCreateCategoryPage() {
  return (
    <div className="admin-category-page w-100 h-100 d-flex">
      <Sidebar currentPage="categories" />
      <CreateCategoryComponents />
    </div>
  );
}
