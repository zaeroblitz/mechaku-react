import { useSelector } from "react-redux";
import NumberFormat from "react-number-format";
import { BsFillCheckSquareFill } from "react-icons/bs";
import "./styles.scss";

export default function CartTotal() {
  const cartTotal = useSelector((state) => state.cartTotal);

  return (
    <div className="cart-total justify-content-end">
      <div className="d-flex justify-content-between">
        <p className="label">Subtotals: </p>
        <NumberFormat
          displayType="text"
          prefix="Rp. "
          decimalSeparator=","
          thousandSeparator="."
          value={cartTotal.total}
          className="price"
        />
      </div>
      <div className="d-flex justify-content-between">
        <p className="label">Grand Total (include tax): </p>
        <NumberFormat
          displayType="text"
          prefix="Rp. "
          decimalSeparator=","
          thousandSeparator="."
          value={cartTotal.grandTotal}
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
