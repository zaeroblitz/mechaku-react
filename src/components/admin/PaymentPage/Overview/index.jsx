import PaymentItem from "./PaymentItem";

export default function PaymentsOverview({ paymentsData }) {
  const renderedPaymentList = () => {
    if (paymentsData.length !== 0) {
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

  return (
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
        <tbody>{paymentsData.length !== 0 && renderedPaymentList()}</tbody>
      </table>
    </section>
  );
}
