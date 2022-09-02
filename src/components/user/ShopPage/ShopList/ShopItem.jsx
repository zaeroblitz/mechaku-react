import { useNavigate } from "react-router-dom";
import NumberFormat from "react-number-format";

export default function ShopItem({ id, name, thumbnail, price }) {
  const navigate = useNavigate();
  const THUMBAIL_URL = "http://localhost:8000/uploads/products";

  return (
    <div
      className="item d-flex flex-column"
      onClick={() => navigate(`/detail/${id}`)}
    >
      <img
        src={`${THUMBAIL_URL}/${thumbnail}`}
        className="item-thumbnail img-fluid"
        alt=""
      />
      <p className="item-title">{name}</p>
      <NumberFormat
        displayType="text"
        prefix="Rp. "
        value={price}
        decimalSeparator=","
        thousandSeparator="."
        className="item-price"
      />
    </div>
  );
}
