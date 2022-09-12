import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import "components/admin/styles.scss";
import EditTransactionStatusComponents from "components/admin/TransactionStatusPage/Edit";
import {
  cleanedUp,
  fetchSelectedTransactionStatus,
} from "features/transactionStatus/selectedTransactionStatusSlice";

export default function AdminEditTransactionStatusPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.user.role !== "ADMIN") {
      navigate("/");
    } else {
      dispatch(fetchSelectedTransactionStatus(id));
    }

    return () => {
      dispatch(cleanedUp());
    };
  }, [auth, navigate, dispatch, id]);

  const handleBackButton = () => {
    navigate("/admin/transaction-status");
  };

  return (
    <>
      <Helmet>
        <title>Mechaku Admin | Edit Transaction Status</title>
      </Helmet>
      <main className="main-container col-lg-8">
        <h2 className="title">Edit Transaction Status</h2>
        <button className="btn btn-back" onClick={handleBackButton}>
          Back
        </button>
        <EditTransactionStatusComponents />
      </main>
    </>
  );
}
