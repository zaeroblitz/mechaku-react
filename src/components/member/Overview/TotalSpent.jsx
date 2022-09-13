import { useSelector } from "react-redux";
import NumberFormat from "react-number-format";
import Logo from "../../../assets/icons/logo.svg";

export default function TotalSpent() {
  let totalSpent = 0;
  const userTransactions = useSelector((state) => state.transactions);

  if (!userTransactions.loading && userTransactions.data.length) {
    userTransactions.data.map(
      (transaction) => (totalSpent += transaction.value + transaction.tax)
    );
  }

  return (
    <section className="overview-total-spent">
      <div className="header d-flex align-items-center">
        <img src={Logo} width="60" height="60" alt="" />
        <h4>Mechaku</h4>
      </div>
      <div className="value">
        <p>Total Spent</p>
        <h4>
          <NumberFormat
            displayType="text"
            prefix="Rp. "
            decimalSeparator=","
            thousandSeparator="."
            value={totalSpent}
          />
        </h4>
      </div>
    </section>
  );
}
