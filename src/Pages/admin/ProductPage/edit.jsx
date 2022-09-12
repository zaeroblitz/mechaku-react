import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import "components/admin/styles.scss";
import EditProductComponents from "components/admin/ProductPage/Edit";
import {
  cleanedUp,
  fetchSelectedProduct,
} from "features/product/selectedProductSlice";
import { fetchCategoriesData } from "features/category/categorySlice";
import { fetchBrandsData } from "features/brand/brandSlice";
import { fetchGradesData } from "features/grade/gradeSlice";

export default function AdminEditProductPage() {
  const { id } = useParams();
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
      dispatch(fetchSelectedProduct(id));
    }

    return () => {
      dispatch(cleanedUp());
    };
  }, [auth, navigate, dispatch, id]);

  const handleBackButton = () => {
    navigate("/admin/products");
  };

  return (
    <>
      <Helmet>
        <title>Mechaku Admin | Edit Product</title>
      </Helmet>
      <main className="main-container col-lg-8">
        <h2 className="title">Edit Product</h2>
        <button className="btn btn-back" onClick={handleBackButton}>
          Back
        </button>
        <EditProductComponents />
      </main>
    </>
  );
}
