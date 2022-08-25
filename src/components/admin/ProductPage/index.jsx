import React from "react";
import ProductsList from "./ProductsList";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function ProductPageComponents() {
  const navigate = useNavigate();
  const onAddButtonClick = (e) => {
    e.preventDefault();

    navigate("/admin/products/create");
  };

  return (
    <div className="products-page-container col-lg-8">
      <h2 className="title">Products</h2>
      <button className="btn btn-add-product mb-5" onClick={onAddButtonClick}>
        Add New Product
      </button>
      <ProductsList />
    </div>
  );
}
