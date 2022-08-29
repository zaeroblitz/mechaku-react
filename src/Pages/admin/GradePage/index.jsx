import React, { useEffect } from "react";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

import Sidebar from "components/admin/Sidebar";
import GradesPageComponent from "components/admin/GradesPage";
import "./styles.css";

export default function AdminGradesPage() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Mechaku Admin | Grades";
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
    <div className="admin-grade-page w-100 h-100 d-flex">
      <Sidebar currentPage="grades" />
      <GradesPageComponent />
    </div>
  );
}
