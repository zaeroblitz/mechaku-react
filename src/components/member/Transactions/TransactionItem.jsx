import NumberFormat from "react-number-format";

export default function TransactionItem({
  thumbnail,
  name,
  category,
  grade,
  amount,
  price,
}) {
  return (
    <div className="transaction-item row justify-content-between align-items-center">
      <section className="product-header col-md-4">
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
      </section>
      <section className="product-grade col-md-2">
        <p>{grade}</p>
      </section>
      <section className="product-amount col-md-2">
        <p>{amount}</p>
      </section>
      <section className="product-price col-md-2 text-end">
        <NumberFormat
          displayType="text"
          prefix="Rp. "
          decimalSeparator=","
          thousandSeparator="."
          value={amount * price}
          className="product-price"
        />
      </section>
    </div>
  );
}
