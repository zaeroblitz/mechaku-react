import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "components/admin/styles.scss";
import ProductsOverview from "components/admin/ProductPage/Overview";
import { fetchAllProducts } from "features/product/productSlice";

export default function AdminProductPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.user.role !== "ADMIN") {
      navigate("/");
    } else {
      dispatch(fetchAllProducts());
    }
  }, [auth, navigate, dispatch]);

  const handleNewCourierButton = () => {
    navigate("/admin/products/create");
  };

  return (
    <>
      <Helmet>
        <title>Mechaku Admin | Products</title>
      </Helmet>
      <main className="main-container col-lg-8">
        <h2 className="title">Products</h2>
        <button className="btn btn-add" onClick={handleNewCourierButton}>
          Add New Product
        </button>
        <ProductsOverview />
      </main>
    </>
  );
}
