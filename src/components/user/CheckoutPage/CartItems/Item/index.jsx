import NumberFormat from "react-number-format";

export default function ProductOrderedItem({
  no,
  thumbnail,
  name,
  category,
  price,
  amount,
}) {
  return (
    <tr className="align-middle">
      <td>{no}</td>
      <td>
        <div className="d-flex align-items-center">
          <img src={thumbnail} alt="" className="product-thumbnail" />
          <div className="product-header">
            <p className="product-name">{name}</p>
            <p className="product-category">{category}</p>
          </div>
        </div>
      </td>
      <td className="text-center">
        <NumberFormat
          displayType="text"
          prefix="Rp. "
          decimalSeparator=","
          thousandSeparator="."
          value={price}
        />
      </td>
      <td>
        <p className="product-amount mb-0 text-center">{amount}</p>
      </td>
      <td className="text-center">
        <NumberFormat
          displayType="text"
          prefix="Rp. "
          decimalSeparator=","
          thousandSeparator="."
          value={price * amount}
        />
      </td>
    </tr>
  );
}
