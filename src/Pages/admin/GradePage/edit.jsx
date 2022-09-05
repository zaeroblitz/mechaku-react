import Cookies from "js-cookie";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

import "components/admin/styles.scss";
import EditGradeComponents from "components/admin/GradesPage/Edit";

export default function AdminEditGradePage() {
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

  const handleBackButton = (e) => {
    e.preventDefault();

    navigate("/admin/grades");
  };

  return (
    <>
      <Helmet>
        <title>Mechaku Admin | Edit Grade</title>
      </Helmet>
      <main className="main-container col-lg-8">
        <h2 className="title">Edit Grade</h2>
        <button className="btn btn-back" onClick={handleBackButton}>
          Back
        </button>
        <EditGradeComponents />
      </main>
    </>
  );
}
