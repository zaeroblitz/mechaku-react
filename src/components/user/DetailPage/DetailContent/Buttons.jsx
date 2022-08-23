import React from "react";

export default function Buttons() {
  return (
    <div className="detail-buttons-container">
      <div className="d-flex justify-content-center">
        <a className="btn btn-cart" href="/">
          Add to Cart
        </a>
        <a className="btn btn-buy" href="/cart">
          Buy Now
        </a>
      </div>
    </div>
  );
}
