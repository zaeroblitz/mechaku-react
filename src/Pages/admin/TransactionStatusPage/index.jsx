import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "components/admin/styles.scss";
import TransactionStatusOverview from "components/admin/TransactionStatusPage/Overview";
import { fetchTransactionStatusData } from "features/transactionStatus/transactionStatusSlice";

export default function AdminTransactionStatusPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.user.role !== "ADMIN") {
      navigate("/");
    } else {
      dispatch(fetchTransactionStatusData());
    }
  }, [auth, navigate, dispatch]);

  const handleNewCourierButton = () => {
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
        <TransactionStatusOverview />
      </main>
    </>
  );
}
