import { Link } from "react-router-dom";
import "./styles.scss";

export default function Breadcrumb() {
  return (
    <nav aria-label="breadcrumb breadcrumb-checkout">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/cart">Cart</Link>
        </li>
        <li className="breadcrumb-item actice">Checkout</li>
      </ol>
    </nav>
  );
}
