import React from "react";
import { BsFillCheckSquareFill } from "react-icons/bs";

export default function CartTotal() {
  return (
    <div className="cart-total-container col-8">
      <div className="d-flex justify-content-between">
        <p className="cart-total-title">Subtotals: </p>
        <p className="cart-total-price">Rp. 6.750.000</p>
      </div>
      <div className="d-flex justify-content-between">
        <p className="cart-total-title">Totals: </p>
        <p className="cart-total-price">Rp. 7.400.000</p>
      </div>
      <div className="cart-total-description d-flex">
        <BsFillCheckSquareFill className="cart-total-description-icon col-1" />
        <p className="cart-total-description-text col-11">
          Shipping & taxes calculated at checkout
        </p>
      </div>
    </div>
  );
}
