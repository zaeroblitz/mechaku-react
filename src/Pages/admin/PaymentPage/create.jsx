import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "components/admin/styles.scss";
import CreatePaymentComponents from "components/admin/PaymentPage/Create";

export default function AdminCreatePaymentPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.user.role !== "ADMIN") {
      navigate("/");
    }
  }, [auth, navigate, dispatch]);

  const handleBackButton = () => {
    navigate("/admin/payments");
  };

  return (
    <>
      <Helmet>
        <title>Mechaku Admin | Create Payment</title>
      </Helmet>
      <main className="main-container col-lg-8">
        <h2 className="title">Create New Payment</h2>
        <button className="btn btn-back" onClick={handleBackButton}>
          Back
        </button>
        <CreatePaymentComponents />
      </main>
    </>
  );
}
