import React from "react";
import FilterItem from "./FilterItem";
import "./styles.css";

export default function index() {
  return (
    <div className="filter">
      <div className="col">
        <div className="filter-title">
          <h2>Filter</h2>
        </div>
        <div className="filter-search">
          <input
            type="text"
            className="form-control"
            placeholder="Keywords..."
          />
        </div>
        <div className="filter-list">
          <h5>Product Categories</h5>
          <FilterItem label="Gundam" />
          <FilterItem label="Digimon" />
          <FilterItem label="Pokemon" />
          <FilterItem label="Zoids" />
        </div>
        <div className="filter-list">
          <h5>Grades Item</h5>
          <FilterItem label="SD (Super Deformed)" />
          <FilterItem label="RG (Real Grade)" />
          <FilterItem label="HG (High Grade)" />
          <FilterItem label="MG (Master Grade)" />
          <FilterItem label="PG (Perfect Grade)" />
        </div>
        <div className="filter-list">
          <h5>Prices Filter</h5>
          <FilterItem label="Rp. 0 - Rp. 100K" />
          <FilterItem label="Rp. 100K - Rp. 300K" />
          <FilterItem label="Rp. 300K - Rp. 1000K" />
          <FilterItem label=">Rp. 1000K" />
        </div>
        <div className="filter-list">
          <h5>Rating Item</h5>
          <FilterItem label="Bintang 5" />
          <FilterItem label="Bintang 4" />
          <FilterItem label="Bintang 3" />
          <FilterItem label="Bintang 2" />
          <FilterItem label="Bintang 1" />
        </div>
      </div>
    </div>
  );
}
