import PaymentItem from "./PaymentItem";
import { useSelector } from "react-redux";
import { GridLoader } from "react-spinners";

export default function PaymentsOverview() {
  const payments = useSelector((state) => state.payments);

  const showPaymentList = () => {
    if (!payments.loading && !payments.error && payments.data.length) {
      const paymentsData = payments.data;
      return paymentsData.map((payment, index) => (
        <PaymentItem
          key={payment._id}
          id={payment._id}
          no={index + 1}
          name={payment.name}
          thumbnail={payment.thumbnail}
        />
      ));
    }
  };

  const showLoadingSpinner = () => {
    if (payments.loading && payments.response === "loading") {
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
      {!payments.loading && !payments.error && payments.data.length && (
        <section className="data-container">
          <table className="table table-borderless table-hover">
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Thumbnail</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>{showPaymentList()}</tbody>
          </table>
        </section>
      )}
    </>
  );
}
