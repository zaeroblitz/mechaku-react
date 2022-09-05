import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

import "components/admin/styles.scss";
import { getAllProducts } from "apis/products";
import ProductsOverview from "components/admin/ProductPage/Overview";

export default function AdminProductPage() {
  const [productsData, setProductsData] = useState([]);
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

  const getProductsData = useCallback(async () => {
    const response = await getAllProducts();

    setProductsData(response.data);
  }, []);

  useEffect(() => {
    getProductsData();
  }, [getProductsData]);

  const handleNewCourierButton = (e) => {
    e.preventDefault();

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
        <ProductsOverview productsData={productsData} />
      </main>
    </>
  );
}
