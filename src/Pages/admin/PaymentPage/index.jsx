import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

import "components/admin/styles.scss";
import { getAllPayments } from "apis/payment";
import PaymentsOverview from "components/admin/PaymentPage/Overview";

export default function AdminPaymentPage() {
  const [paymentsData, setPaymentsData] = useState([]);
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

  const getPaymentsData = useCallback(async () => {
    const response = await getAllPayments();

    setPaymentsData(response.data);
  }, []);

  useEffect(() => {
    getPaymentsData();
  }, [getPaymentsData]);

  const handleNewCourierButton = (e) => {
    e.preventDefault();

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
        <PaymentsOverview paymentsData={paymentsData} />
      </main>
    </>
  );
}
