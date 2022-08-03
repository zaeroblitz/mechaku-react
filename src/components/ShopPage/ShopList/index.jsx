import React from "react";
import ShopItem from "./ShopItem";
import "./styles.css";

export default function ShopList() {
  return (
    <>
      <div className="shop-keyword">
        <h2>Result of Gundam</h2>
      </div>
      <div className="shop-list">
        <div className="row row-cols-4 g-3">
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
    </>
  );
}
