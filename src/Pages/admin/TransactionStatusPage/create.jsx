import React, { useEffect } from "react";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

import Sidebar from "components/admin/Sidebar";
import CreateTransactionStatusComponents from "components/admin/TransactionStatusPage/CreateTransactionStatus";
import "./styles.css";

export default function AdminCreateTransactionStatusPage() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Mechaku Admin | Transaction Status";
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
    <div className="admin-transaction-status-page w-100 h-100 d-flex">
      <Sidebar currentPage="transaction-status" />
      <CreateTransactionStatusComponents />
    </div>
  );
}
