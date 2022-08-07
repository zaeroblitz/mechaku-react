import React from "react";
import { FiTrash2 } from "react-icons/fi";

export default function TableItem({ thumbnail, name, category, price }) {
  return (
    <tr className="table-item">
      <td>
        <img
          src={thumbnail}
          width="90"
          height="90"
          className="table-item-thumbnail"
          alt=""
        />
      </td>
      <td>
        <p className="table-item-product-name">{name}</p>
        <p className="table-item-product-category">{category}</p>
      </td>
      <td>
        <p className="table-item-price">{price}</p>
      </td>
      <td className="text-center">
        <a href="/" className="table-remove">
          <FiTrash2 />
        </a>
      </td>
    </tr>
  );
}
