import NumberFormat from "react-number-format";
import { useSelector } from "react-redux";

export default function ContentPayment() {
  const transaction = useSelector((state) => state.selectedTransaction);

  return (
    <>
      {!transaction.loading && Object.keys(transaction.data).length !== 0 && (
        <div className="content-payment">
          <p className="content-payment-header">Payment Details</p>
          <div className="content-payment-value d-flex justify-content-between">
            <p className="label">Type</p>
            <p className="value">Transfer</p>
          </div>
          <div className="content-payment-value d-flex justify-content-between">
            <p className="label">Payment Method</p>
            <p className="value">{transaction.data.payment.name}</p>
          </div>
          <div className="content-payment-value d-flex justify-content-between">
            <p className="label">Bank Account Name</p>
            <p className="value">{transaction.data.user.name}</p>
          </div>
          <div className="content-payment-value d-flex justify-content-between">
            <p className="label">Total Price</p>
            <p className="value">
              <NumberFormat
                displayType="text"
                prefix="Rp. "
                decimalSeparator=","
                thousandSeparator="."
                value={transaction.data.value}
              />
            </p>
          </div>
          <div className="content-payment-value d-flex justify-content-between">
            <p className="label">Tax</p>
            <p className="value">
              <NumberFormat
                displayType="text"
                prefix="Rp. "
                decimalSeparator=","
                thousandSeparator="."
                value={transaction.data.tax}
              />
            </p>
          </div>
          <div className="content-payment-value d-flex justify-content-between">
            <p className="label">Grand Total</p>
            <p className="value price">
              <NumberFormat
                displayType="text"
                prefix="Rp. "
                decimalSeparator=","
                thousandSeparator="."
                value={transaction.data.value + transaction.data.tax}
              />
            </p>
          </div>
        </div>
      )}
    </>
  );
}
