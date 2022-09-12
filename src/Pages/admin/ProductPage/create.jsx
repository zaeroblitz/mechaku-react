import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "components/admin/styles.scss";
import CreateProductComponents from "components/admin/ProductPage/Create";
import { fetchBrandsData } from "features/brand/brandSlice";
import { fetchGradesData } from "features/grade/gradeSlice";
import { fetchCategoriesData } from "features/category/categorySlice";

export default function AdminCreateProductPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.user.role !== "ADMIN") {
      navigate("/");
    } else {
      dispatch(fetchBrandsData());
      dispatch(fetchGradesData());
      dispatch(fetchCategoriesData());
    }
  }, [auth, navigate, dispatch]);

  const handleBackButton = () => {
    navigate("/admin/products");
  };

  return (
    <>
      <Helmet>
        <title>Mechaku Admin | Create Product</title>
      </Helmet>
      <main className="main-container col-lg-8">
        <h2 className="title">Create New Product</h2>
        <button className="btn btn-back" onClick={handleBackButton}>
          Back
        </button>
        <CreateProductComponents />
      </main>
    </>
  );
}
