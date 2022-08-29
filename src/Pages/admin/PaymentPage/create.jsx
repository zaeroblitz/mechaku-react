import React, { useEffect } from "react";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

import Sidebar from "components/admin/Sidebar";
import CreatePaymentComponents from "components/admin/PaymentPage/CreatePayment";
import "./styles.css";

export default function AdminCreatePaymentPage() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Mechaku Admin | Payments";
    const tokenBase64 = Cookies.get("token");

    if (tokenBase64) {
      const token = atob(tokenBase64);

      const jwt = jwtDecode(token);
      if (jwt.user.role !== "ADMIN") {
        navigate("/");
      }
    } else {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="admin-payment-page w-100 h-100 d-flex">
      <Sidebar currentPage="transaction-status" />
      <CreatePaymentComponents />
    </div>
  );
}