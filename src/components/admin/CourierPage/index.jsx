import React from "react";
import { useNavigate } from "react-router-dom";

import CourierList from "./CourierList";
import "./styles.css";

export default function CourierPageComponents() {
  const navigate = useNavigate();

  const onAddButtonClick = (e) => {
    e.preventDefault();

    navigate("/admin/couriers/create");
  };

  return (
    <div className="couriers-page-container col-lg-8">
      <h2 className="title">Couriers</h2>
      <div className="add-couriers mb-5">
        <button
          className="btn btn-primary btn-add-courier"
          onClick={onAddButtonClick}
        >
          Add New Courier
        </button>
      </div>
      <CourierList />
    </div>
  );
}
