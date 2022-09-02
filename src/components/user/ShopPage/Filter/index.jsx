import FilterItem from "./FilterItem";
import "./styles.scss";

export default function index() {
  return (
    <section className="filter col-md-3">
      <h2 className="filter-title">Filter</h2>
      <input
        type="text"
        className="filter-search form-control"
        placeholder="Keywords..."
      />
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
    </section>
  );
}
