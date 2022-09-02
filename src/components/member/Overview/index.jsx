import TotalSpent from "./TotalSpent";
import LatestTransactions from "./LatestTransactions";
import "./styles.scss";

export default function Overview() {
  return (
    <main className="overview-content col-lg-8">
      <h1 className="overview-title">Overview</h1>
      <TotalSpent />
      <LatestTransactions />
    </main>
  );
}
