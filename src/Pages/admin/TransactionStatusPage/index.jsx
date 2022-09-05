import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

import "components/admin/styles.scss";
import { getAllTransactionStatus } from "apis/transactionStatus";
import TransactionStatusOverview from "components/admin/TransactionStatusPage/Overview";

export default function AdminTransactionStatusPage() {
  const [transactionStatusData, setTransactionStatusData] = useState([]);
  const navigate = useNavigate();
  const tokenBase64 = Cookies.get("token");

  useEffect(() => {
    if (tokenBase64) {
      const token = atob(tokenBase64);
      const jwt = jwtDecode(token);

      if (jwt.user.role !== "ADMIN") {
        navigate("/");
      }
    } else {
      navigate("/");
    }
  }, [tokenBase64, navigate]);

  const getTransactionStatusData = useCallback(async () => {
    const response = await getAllTransactionStatus();

    setTransactionStatusData(response.data);
  }, []);

  useEffect(() => {
    getTransactionStatusData();
  }, [getTransactionStatusData]);

  const handleNewCourierButton = (e) => {
    e.preventDefault();

    navigate("/admin/transaction-status/create");
  };

  return (
    <>
      <Helmet>
        <title>Mechaku Admin | Transaction Status</title>
      </Helmet>
      <main className="main-container col-lg-8">
        <h2 className="title">Transaction Status</h2>
        <button className="btn btn-add" onClick={handleNewCourierButton}>
          Add New Payment
        </button>
        <TransactionStatusOverview
          transactionStatusData={transactionStatusData}
        />
      </main>
    </>
  );
}
