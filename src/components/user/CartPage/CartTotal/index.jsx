import NumberFormat from "react-number-format";
import { BsFillCheckSquareFill } from "react-icons/bs";
import "./styles.scss";

export default function CartTotal({ total, tax }) {
  return (
    <div className="cart-total col-5 justify-content-end">
      <div className="d-flex justify-content-between">
        <p className="label">Subtotals: </p>
        <NumberFormat
          displayType="text"
          prefix="Rp. "
          decimalSeparator=","
          thousandSeparator="."
          value={total}
          className="price"
        />
      </div>
      <div className="d-flex justify-content-between">
        <p className="label">Totals (include tax): </p>
        <NumberFormat
          displayType="text"
          prefix="Rp. "
          decimalSeparator=","
          thousandSeparator="."
          value={total + tax}
          className="price"
        />
      </div>
      <div className="description d-flex align-items-center">
        <BsFillCheckSquareFill className="description-icon col-1" />
        <p className="description-text col-10">
          Shipping & taxes calculated at checkout
        </p>
      </div>
    </div>
  );
}
