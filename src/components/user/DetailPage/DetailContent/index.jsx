import React from "react";
import Buttons from "./Buttons";
import NumberFormat from "react-number-format";
import "./styles.css";

export default function DetailContent({
  name,
  price,
  category,
  grade,
  brand,
  description,
}) {
  return (
    <div className="col-md-6">
      <div className="detail-content">
        <div className="detail-content-title">
          <h2>{name}</h2>
        </div>
        <div className="detail-content-price">
          <p>
            <NumberFormat
              displayType="text"
              prefix="Rp. "
              decimalSeparator=","
              thousandSeparator="."
              value={price}
            />
          </p>
        </div>
        <div className="detail-content-category">
          <p>Category: {category}</p>
        </div>
        <div className="detail-content-grade">
          <p>Grade: {grade}</p>
        </div>
        <div className="detail-content-grade">
          <p>Brand: {brand}</p>
        </div>
        <div className="detail-content-about">
          <p className="detail-content-about-title">About the product</p>
          <p className="detail-content-about-description">{description}</p>
        </div>
        <Buttons />
      </div>
    </div>
  );
}
