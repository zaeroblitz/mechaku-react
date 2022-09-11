import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "components/admin/styles.scss";
import { fetchPaymentsData } from "features/payment/paymentSlice";
import PaymentsOverview from "components/admin/PaymentPage/Overview";

export default function AdminPaymentPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.user.role !== "ADMIN") {
      navigate("/");
    } else {
      dispatch(fetchPaymentsData());
    }
  }, [auth, navigate, dispatch]);

  const handleNewCourierButton = (e) => {
    navigate("/admin/payments/create");
  };

  return (
    <>
      <Helmet>
        <title>Mechaku Admin | Payments</title>
      </Helmet>
      <main className="main-container col-lg-8">
        <h2 className="title">Payments</h2>
        <button className="btn btn-add" onClick={handleNewCourierButton}>
          Add New Payment
        </button>
        <PaymentsOverview />
      </main>
    </>
  );
}
