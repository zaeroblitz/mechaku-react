import React from "react";

export default function FilterItem({ label }) {
  return (
    <div className="filter-item d-flex flex-row align-items-center">
      <input className="form-check-input" type="checkbox" value="" />
      <label className="form-check-label">{label}</label>
    </div>
  );
}
