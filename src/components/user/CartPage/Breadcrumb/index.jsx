import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Breadcrumb() {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Cart
        </li>
      </ol>
    </nav>
  );
}
