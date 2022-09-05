import TransactionStatusItem from "./TransactionStatusItem";

export default function TransactionStatusOverview({ transactionStatusData }) {
  const renderedTransactionStatusList = () => {
    if (transactionStatusData.length !== 0) {
      return transactionStatusData.map((payment, index) => (
        <TransactionStatusItem
          key={payment._id}
          id={payment._id}
          no={index + 1}
          name={payment.name}
        />
      ));
    }
  };

  return (
    <section className="data-container">
      <table className="table table-borderless table-hover">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {transactionStatusData.length !== 0 &&
            renderedTransactionStatusList()}
        </tbody>
      </table>
    </section>
  );
}
