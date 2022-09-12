import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import "components/admin/styles.scss";
import EditPaymentComponents from "components/admin/PaymentPage/Edit";
import {
  cleanedUp,
  fetchSelectedPayment,
} from "features/payment/selectedPaymentSlice";

export default function AdminEditPaymentPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.user.role !== "ADMIN") {
      navigate("/");
    } else {
      dispatch(fetchSelectedPayment(id));
    }

    return () => {
      dispatch(cleanedUp());
    };
  }, [auth, navigate, dispatch, id]);

  const handleBackButton = () => {
    navigate("/admin/payments");
  };

  return (
    <>
      <Helmet>
        <title>Mechaku Admin | Edit Payment</title>
      </Helmet>
      <main className="main-container col-lg-8">
        <h2 className="title">Edit Payment</h2>
        <button className="btn btn-back" onClick={handleBackButton}>
          Back
        </button>
        <EditPaymentComponents />
      </main>
    </>
  );
}
