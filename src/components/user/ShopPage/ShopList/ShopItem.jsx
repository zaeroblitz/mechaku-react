import React from "react";
import { useNavigate } from "react-router-dom";
import ShopItemThumbnail from "assets/images/shop-item.jpg";

export default function ShopItem() {
  const navigate = useNavigate();
  return (
    <div
      className="shop-item d-flex flex-column"
      onClick={() => navigate("/detail")}
    >
      <div className="shop-item-thumbnail">
        <img src={ShopItemThumbnail} className="img-fluid" alt="" />
      </div>
      <div className="shop-item-content">
        <h5 className="shop-item-title">Astray Red</h5>
        <p className="shop-item-price"> IDR 1.275K</p>
      </div>
    </div>
  );
}
