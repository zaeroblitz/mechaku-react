import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

import "components/admin/styles.scss";
import { getAllCategories } from "apis/category";
import CategoriesOverview from "components/admin/CategoriesPage/Overview";

export default function AdminCategoriesPage() {
  const [categoriesData, setCategoriesData] = useState([]);
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

  const getCategoriesData = useCallback(async () => {
    const categoriesData = await getAllCategories();
    setCategoriesData(categoriesData.data);
  }, []);

  useEffect(() => {
    getCategoriesData();
  }, [getCategoriesData]);

  const handleNewCategoryButton = (e) => {
    e.preventDefault();

    navigate("/admin/categories/create");
  };

  return (
    <>
      <Helmet>
        <title>Mechaku Admin | Category</title>
      </Helmet>
      <main className="main-container col-lg-8">
        <h2 className="title">Categories</h2>
        <button className="btn btn-add" onClick={handleNewCategoryButton}>
          Add New Category
        </button>
        <CategoriesOverview categoriesData={categoriesData} />
      </main>
    </>
  );
}
