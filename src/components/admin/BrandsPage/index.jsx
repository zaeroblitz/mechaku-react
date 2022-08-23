import React from "react";
import BrandsLists from "./BrandsLists";
import { useNavigate } from "react-router-dom";

import "./styles.css";

export default function BrandsPageComponents() {
  const navigate = useNavigate();

  const onAddNewBrandClick = (e) => {
    e.preventDefault();
    navigate("/admin/brands/create");
  };

  return (
    <div className="brands-page-container col-lg-8">
      <h2 className="title">Brands</h2>
      <div className="add-brands mb-5">
        <button
          className="btn btn-primary btn-add-brands"
          onClick={onAddNewBrandClick}
        >
          Add New Brands
        </button>
      </div>
      <BrandsLists />
    </div>
  );
}
