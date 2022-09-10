import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "components/admin/styles.scss";
import { fetchCategoriesData } from "features/category/categorySlice";
import CategoriesOverview from "components/admin/CategoriesPage/Overview";

export default function AdminCategoriesPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.user.role !== "ADMIN") {
      navigate("/");
    } else {
      dispatch(fetchCategoriesData());
    }
  }, [auth, navigate, dispatch]);

  const handleNewCategoryButton = () => {
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
        <CategoriesOverview />
      </main>
    </>
  );
}
