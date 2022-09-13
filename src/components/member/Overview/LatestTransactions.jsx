import NumberFormat from "react-number-format";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GridLoader } from "react-spinners";
import TransactionItem from "./TransactionItem";

export default function LatestTransactions() {
  const navigate = useNavigate();
  const userTransactions = useSelector((state) => state.transactions);
  const PRODUCT_THUMBNAIL_URL = "http://localhost:8000/uploads/products";

  const handleTransactionCardClick = (id) => {
    navigate(`/member/transactions/detail/${id}`);
  };

  const showTransactionItems = () => {
    if (!userTransactions.loading && userTransactions.data.length) {
      return userTransactions.data.map((transaction) => {
        return (
          <div
            className="transactions-list"
            key={transaction._id}
            onClick={() => handleTransactionCardClick(transaction._id)}
          >
            {transaction.products.map((product, index) => {
              return (
                <TransactionItem
                  key={product._id}
                  thumbnail={`${PRODUCT_THUMBNAIL_URL}/${product.details.images[0]}`}
                  name={product.name}
                  category={product.category.name}
                  grade={product.grade.name}
                  amount={transaction.cartItems[index].amount}
                  price={product.details.price}
                />
              );
            })}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="transaction-label mb-0">Status</p>
              <div className="transaction-status d-flex align-items-center">
                <span
                  className={`status-indicator ${transaction.transactionStatus.name.toLowerCase()}`}
                ></span>
                <p className="status-label mb-0">
                  {transaction.transactionStatus.name}
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p className="transaction-label mb-2">Total</p>
              <p className="transaction-value mb-2">
                <NumberFormat
                  displayType="text"
                  prefix="Rp. "
                  decimalSeparator=","
                  thousandSeparator="."
                  value={transaction.value}
                />
              </p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p className="transaction-label mb-2">Tax</p>
              <p className="transaction-value mb-2">
                <NumberFormat
                  displayType="text"
                  prefix="Rp. "
                  decimalSeparator=","
                  thousandSeparator="."
                  value={transaction.tax}
                />
              </p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p className="transaction-label mb-2">Grand Total</p>
              <p className="transaction-grand-total mb-2">
                <NumberFormat
                  displayType="text"
                  prefix="Rp. "
                  decimalSeparator=","
                  thousandSeparator="."
                  value={transaction.value + transaction.tax}
                />
              </p>
            </div>
          </div>
        );
      });
    }
  };

  const showLoadingSpinner = () => {
    if (userTransactions.loading && userTransactions.response === "loading") {
      return (
        <div className="w-100 h-100 d-flex align-items-center justify-content-center">
          <GridLoader color="#333333" />
        </div>
      );
    }
  };

  return (
    <section className="overview-transactions">
      <h2>Latest Transactions</h2>
      <div className="transactions-container">
        {showLoadingSpinner()}
        {!userTransactions.loading &&
          userTransactions.data.length &&
          showTransactionItems()}
      </div>
    </section>
  );
}
