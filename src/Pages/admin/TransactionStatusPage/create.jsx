import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "components/admin/styles.scss";
import CreateTransactionStatusComponents from "components/admin/TransactionStatusPage/Create";

export default function AdminCreateTransactionStatusPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.user.role !== "ADMIN") {
      navigate("/");
    }
  }, [auth, navigate, dispatch]);

  const handleBackButton = () => {
    navigate("/admin/transaction-status");
  };

  return (
    <>
      <Helmet>
        <title>Mechaku Admin | Create Transaction Status</title>
      </Helmet>
      <main className="main-container col-lg-8">
        <h2 className="title">Create New Transaction Status</h2>
        <button className="btn btn-back" onClick={handleBackButton}>
          Back
        </button>
        <CreateTransactionStatusComponents />
      </main>
    </>
  );
}
