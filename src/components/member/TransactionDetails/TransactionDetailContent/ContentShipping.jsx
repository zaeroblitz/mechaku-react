import { useSelector } from "react-redux";

export default function ContentShipping() {
  const transaction = useSelector((state) => state.selectedTransaction);

  return (
    <>
      {!transaction.loading && Object.keys(transaction.data).length !== 0 && (
        <div className="content-shipping">
          <p className="content-shipping-header">Shipping Details</p>
          <div className="content-shipping-value d-flex justify-content-between">
            <p className="label">Name</p>
            <p className="value">{transaction.data.user.name}</p>
          </div>
          <div className="content-shipping-value d-flex justify-content-between">
            <p className="label">Email</p>
            <p className="value">{transaction.data.user.email}</p>
          </div>
          <div className="content-shipping-value d-flex justify-content-between">
            <p className="label">Address</p>
            <p className="value address">{transaction.data.address}</p>
          </div>
          <div className="content-shipping-value d-flex justify-content-between">
            <p className="label">Phone Number</p>
            <p className="value">0812-3456-7890</p>
          </div>
          <div className="content-shipping-value d-flex justify-content-between">
            <p className="label">Courier</p>
            <p className="value">{transaction.data.courier.name}</p>
          </div>
        </div>
      )}
    </>
  );
}
