import React from "react";
import NumberFormat from "react-number-format";
import { useNavigate } from "react-router-dom";

export default function ShopItem({ id, name, thumbnail, price }) {
  const navigate = useNavigate();
  const THUMBAIL_URL = "http://localhost:8000/uploads/products";

  return (
    <div
      className="shop-item d-flex flex-column"
      onClick={() => navigate(`/detail/${id}`)}
    >
      <div className="shop-item-thumbnail">
        <img
          src={`${THUMBAIL_URL}/${thumbnail}`}
          className="img-fluid"
          alt=""
        />
      </div>
      <div className="shop-item-content">
        <div className="shop-item-title">
          <p>{name}</p>
        </div>
        <p className="shop-item-price">
          <NumberFormat
            displayType="text"
            prefix="Rp. "
            value={price}
            decimalSeparator=","
            thousandSeparator="."
          />
        </p>
      </div>
    </div>
  );
}
