import { useSelector } from "react-redux";
import NumberFormat from "react-number-format";

export default function TransactionsHeader() {
  let totalSpent = 0;
  const userTransactions = useSelector((state) => state.transactions);

  if (!userTransactions.loading && userTransactions.data.length) {
    userTransactions.data.map(
      (transaction) => (totalSpent += transaction.value + transaction.tax)
    );
  }
  return (
    <>
      <h1 className="transactions-title">My Transactions</h1>
      <div className="transactions-header">
        <p>You've spent</p>
        <h2>
          <NumberFormat
            displayType="text"
            prefix="Rp. "
            decimalSeparator=","
            thousandSeparator="."
            value={totalSpent}
          />
        </h2>
      </div>
    </>
  );
}
