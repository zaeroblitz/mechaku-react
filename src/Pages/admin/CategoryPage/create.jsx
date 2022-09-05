import Cookies from "js-cookie";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

import "components/admin/styles.scss";
import CreateCategory from "components/admin/CategoriesPage/Create";

export default function AdminCreateCategoryPage() {
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

    navigate("/admin/categories");
  };

  return (
    <>
      <Helmet>
        <title>Mechaku Admin | Create Category</title>
      </Helmet>
      <main className="main-container col-lg-8">
        <h2 className="title">Create New Category</h2>
        <button className="btn btn-back" onClick={handleBackButton}>
          Back
        </button>
        <CreateCategory />
      </main>
    </>
  );
}
