export default function TransactionItem({
  thumbnail,
  name,
  category,
  grade,
  price,
  status,
}) {
  return (
    <tr className="align-middle table-item">
      <td className="product-header">
        <div className="d-flex align-items-center">
          <img
            className="product-thumbnail"
            src={thumbnail}
            width="60"
            height="60"
            alt=""
          />
          <div className="product-header-label">
            <p className="product-name">{name}</p>
            <p className="product-category">{category}</p>
          </div>
        </div>
      </td>
      <td className="product-grade">
        <p>{grade}</p>
      </td>
      <td className="product-price">
        <p>{price}</p>
      </td>
      <td className="product-status">
        <div className="d-flex align-items-center">
          <span className={`status-indicator ${status.toLowerCase()}`}></span>
          <p className="status-label">{status}</p>
        </div>
      </td>
    </tr>
  );
}
