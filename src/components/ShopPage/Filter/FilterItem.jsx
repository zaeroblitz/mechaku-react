import React from "react";

export default function FilterItem({ label }) {
  return (
    <div className="filter-item d-flex flex-row align-items-center">
      <input class="form-check-input" type="checkbox" value="" />
      <label class="form-check-label">{label}</label>
    </div>
  );
}
