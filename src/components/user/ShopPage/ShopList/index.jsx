import React from "react";
import ShopItem from "./ShopItem";
import "./styles.css";

export default function ShopList() {
  return (
    <div className="col-md-9">
      <div className="shop-keyword ms-5">
        <h2>Result of Gundam</h2>
      </div>
      <div className="shop-list">
        <div className="row row-cols-4 g-3 justify-content-end">
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
        </div>
      </div>
    </div>
  );
}
