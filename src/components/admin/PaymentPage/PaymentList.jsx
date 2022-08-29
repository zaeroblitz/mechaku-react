import React, { useCallback, useEffect, useState } from "react";
import { getAllPayments } from "apis/payment";
import PaymentItem from "./PaymentItem";

export default function PaymentList() {
  const [data, setData] = useState([]);

  const getPaymentsData = useCallback(async () => {
    const response = await getAllPayments();

    setData(response.data);
  }, []);

  useEffect(() => {
    (async () => {
      getPaymentsData();
    })();
  }, [getPaymentsData]);

  const renderedPaymentList = () => {
    if (data) {
      return data.map((payment, index) => (
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
    <div className="payments-data-wrapper">
      <table className="table table-borderless table-hover">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Thumbnail</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{data && renderedPaymentList()}</tbody>
      </table>
    </div>
  );
}
