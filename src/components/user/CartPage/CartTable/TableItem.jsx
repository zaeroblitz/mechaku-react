import Swal from "sweetalert2";
import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import NumberFormat from "react-number-format";
import { BiMinus, BiPlus } from "react-icons/bi";

import { removeCartItem } from "apis/cart";

export default function TableItem({
  itemId,
  thumbnail,
  name,
  category,
  amount,
  price,
  stock,
  token,
  userId,
  onCheckItemChange,
  onPriceItemChange,
}) {
  const [value, setValue] = useState(amount);
  const [itemPrice, setItemPrice] = useState(price);
  const THUMBNAIL_URL = "http://localhost:8000/uploads/products";

  const handleCheckItem = (e) => {
    onCheckItemChange(e.target.id, e.target.value);
  };

  const handleMinIconClick = () => {
    if (value !== 1) {
      setValue(value - 1);
      setItemPrice((value - 1) * price);
      onPriceItemChange(itemId, (value - 1) * price);
    }
  };

  const handlePlusIconClick = () => {
    if (value < stock) {
      setValue(value + 1);
      setItemPrice((value + 1) * price);
      onPriceItemChange(itemId, (value + 1) * price);
    }
  };

  const handleRemoveItem = async (e) => {
    e.preventDefault();

    const data = {
      item: itemId,
    };

    const response = await removeCartItem(token, userId, data);

    if (response.status === "success") {
      Swal.fire({
        title: "Success",
        text: "Success remove item from cart",
        icon: "success",
        confirmButtonText: "OK!",
      });
    }
  };

  return (
    <tr className="table-item align-items-center">
      <td>
        <input
          type="checkbox"
          name="itemCheck"
          id={itemId}
          value={itemPrice}
          onChange={handleCheckItem}
        />
      </td>
      <td>
        <div className="d-flex align-items-center">
          <img
            src={`${THUMBNAIL_URL}/${thumbnail}`}
            width="90"
            height="90"
            className="product-thumbnail me-3"
            alt=""
          />
          <div>
            <p className="product-name">{name}</p>
            <p className="product-category">{category}</p>
          </div>
        </div>
      </td>
      <td>
        <div className="amount-buttons d-flex align-items-center">
          <div className="icon-container" onClick={handleMinIconClick}>
            <BiMinus className="icon" />
          </div>
          <p className="value">{value}</p>
          <div className="icon-container" onClick={handlePlusIconClick}>
            <BiPlus className="icon" />
          </div>
        </div>
      </td>
      <td>
        <NumberFormat
          displayType="text"
          prefix="Rp."
          decimalSeparator=","
          thousandSeparator="."
          value={itemPrice}
          className="product-price"
        />
      </td>
      <td className="text-center">
        <button className="btn btn-remove" onClick={handleRemoveItem}>
          <FiTrash2 />
        </button>
      </td>
    </tr>
  );
}
