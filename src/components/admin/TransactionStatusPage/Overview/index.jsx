import { useSelector } from "react-redux";
import { GridLoader } from "react-spinners";
import TransactionStatusItem from "./TransactionStatusItem";

export default function TransactionStatusOverview() {
  const transactionStatus = useSelector((state) => state.transactionStatus);

  const renderedTransactionStatusList = () => {
    if (
      !transactionStatus.loading &&
      !transactionStatus.error &&
      transactionStatus.data.length
    ) {
      const transactionStatusData = transactionStatus.data;
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

  const showLoadingSpinner = () => {
    if (transactionStatus.loading && transactionStatus.response === "loading") {
      return (
        <div className="w-100 h-100 d-flex justify-content-center align-items-center">
          <GridLoader color="#333333" />
        </div>
      );
    }
  };

  return (
    <>
      {showLoadingSpinner()}
      {!transactionStatus.loading &&
        !transactionStatus.error &&
        transactionStatus.data.length && (
          <section className="data-container">
            <table className="table table-borderless table-hover">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>{renderedTransactionStatusList()}</tbody>
            </table>
          </section>
        )}
    </>
  );
}
