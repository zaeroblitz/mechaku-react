import React from "react";

export default function TransactionItem({
  thumbnail,
  name,
  category,
  grade,
  price,
  status,
}) {
  return (
    <tr className="align-middle">
      <td>
        <div className="d-flex align-items-center">
          <img
            className="overview-transactions-thumbnail"
            src={thumbnail}
            width="60"
            height="60"
            alt=""
          />
          <div className="overview-transactions-product">
            <p className="product-name">{name}</p>
            <p className="product-category">{category}</p>
          </div>
        </div>
      </td>
      <td>
        <p className="product-grade">{grade}</p>
      </td>
      <td>
        <p className="product-price">{price}</p>
      </td>
      <td>
        <div className="product-status d-flex align-items-center">
          <span
            className={`product-status-indicator ${status.toLowerCase()}`}
          ></span>
          <p className="product-status-text">{status}</p>
        </div>
      </td>
      <td>
        <a className="btn btn-detail-transactions" href="member">
          Details
        </a>
      </td>
    </tr>
  );
}
