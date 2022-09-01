import React from "react";
import NumberFormat from "react-number-format";
import { BsFillCheckSquareFill } from "react-icons/bs";

export default function CartTotal({ total, tax }) {
  return (
    <div className="cart-total-container col-8">
      <div className="d-flex justify-content-between">
        <p className="cart-total-title">Subtotals: </p>
        <NumberFormat
          displayType="text"
          prefix="Rp. "
          decimalSeparator=","
          thousandSeparator="."
          value={total}
          className="cart-total-price"
        />
      </div>
      <div className="d-flex justify-content-between">
        <p className="cart-total-title">Totals (include tax): </p>
        <NumberFormat
          displayType="text"
          prefix="Rp. "
          decimalSeparator=","
          thousandSeparator="."
          value={total + tax}
          className="cart-total-price"
        />
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
