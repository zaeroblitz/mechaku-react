import Cookies from "js-cookie";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

import "components/admin/styles.scss";
import EditBrand from "components/admin/BrandsPage/Edit";

export default function AdminEditBrandsPage() {
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

    navigate("/admin/brands");
  };

  return (
    <>
      <Helmet>
        <title>Mechaku Admin | Edit Brand</title>
      </Helmet>
      <main className="main-container col-lg-8">
        <h2 className="title">Edit Brand</h2>
        <button className="btn btn-back" onClick={handleBackButton}>
          Back
        </button>
        <EditBrand />
      </main>
    </>
  );
}
