import React, { useCallback, useEffect, useState } from "react";
import { getAllTransactionStatus } from "apis/transactionStatus";
import TransactionStatusItem from "./TransactionStatusItem";

export default function TransactionStatusList() {
  const [data, setData] = useState([]);

  const getTransactionStatusData = useCallback(async () => {
    const response = await getAllTransactionStatus();

    setData(response.data);
  }, []);

  useEffect(() => {
    (async () => {
      getTransactionStatusData();
    })();
  }, [getTransactionStatusData]);

  const renderedTransactionStatusList = () => {
    if (data) {
      return data.map((payment, index) => (
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
    <div className="transaction-status-data-wrapper">
      <table className="table table-borderless table-hover">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{data && renderedTransactionStatusList()}</tbody>
      </table>
    </div>
  );
}
