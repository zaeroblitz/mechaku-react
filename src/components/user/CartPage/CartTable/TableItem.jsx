import React, { useState } from "react";
import NumberFormat from "react-number-format";
import { FiTrash2 } from "react-icons/fi";
import { BiMinus, BiPlus } from "react-icons/bi";
import { removeCartItem } from "apis/cart";
import Swal from "sweetalert2";

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
}) {
  const THUMBNAIL_URL = "http://localhost:8000/uploads/products";
  const [value, setValue] = useState(amount);

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

  const handleMinIconClick = () => {
    if (value !== 1) {
      setValue(value - 1);
    }
  };

  const handlePlusIconClick = () => {
    if (value < stock) {
      setValue(value + 1);
    }
  };

  return (
    <tr className="table-item align-items-center">
      <td>
        <input type="checkbox" name="itemCheck" id="itemCheck" />
      </td>
      <td>
        <div className="d-flex align-items-center">
          <img
            src={`${THUMBNAIL_URL}/${thumbnail}`}
            width="90"
            height="90"
            className="table-item-thumbnail me-3"
            alt=""
          />
          <div>
            <p className="table-item-product-name">{name}</p>
            <p className="table-item-product-category">{category}</p>
          </div>
        </div>
      </td>
      <td className="text-center">
        <div className="quantity-action d-flex align-items-center">
          <BiMinus className="icon" onClick={handleMinIconClick} />
          <p className="value">{value}</p>
          <BiPlus className="icon" onClick={handlePlusIconClick} />
        </div>
      </td>
      <td className="text-center">
        <NumberFormat
          displayType="text"
          prefix="Rp."
          decimalSeparator=","
          thousandSeparator="."
          value={value > 1 ? value * price : price}
          className="table-item-price"
        />
      </td>
      <td className="text-center">
        <button className="btn table-remove" onClick={handleRemoveItem}>
          <FiTrash2 />
        </button>
      </td>
    </tr>
  );
}
