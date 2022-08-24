import React from "react";
import { useNavigate } from "react-router-dom";
import CategoryList from "./CategoryList";
import "./styles.css";

export default function CategoriesPageComponent() {
  const navigate = useNavigate();

  const onAddNewCategoryClick = (e) => {
    e.preventDefault();
    navigate("/admin/categories/create");
  };

  return (
    <div className="categories-page-container col-lg-8">
      <h2 className="title">Categories</h2>
      <div className="add-categories mb-5">
        <button
          className="btn btn-primary btn-add-category"
          onClick={onAddNewCategoryClick}
        >
          Add New Category
        </button>
      </div>
      <CategoryList />
    </div>
  );
}
