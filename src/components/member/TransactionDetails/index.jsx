import TransactionDetailContent from "./TransactionDetailContent";
import TransactionDetailHeader from "./TransactionDetailHeader";
import "./styles.scss";

export default function TransactionDetailComponents() {
  return (
    <div className="transaction-detail-container col-lg-8">
      <TransactionDetailHeader />
      <TransactionDetailContent />
    </div>
  );
}
