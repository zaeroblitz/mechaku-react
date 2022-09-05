import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

import "components/admin/styles.scss";
import { getBrands } from "apis/brands";
import BrandsOverview from "components/admin/BrandsPage/Overview";

export default function AdminBrandsPage() {
  const [brandsData, setBrandsData] = useState([]);
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

  const getBrandsData = useCallback(async () => {
    const brandsData = await getBrands();

    const data = brandsData.data;
    setBrandsData(data);
  }, []);

  useEffect(() => {
    getBrandsData();
  }, [getBrandsData]);

  const handleNewBrandButton = (e) => {
    e.preventDefault();
    navigate("/admin/brands/create");
  };

  return (
    <>
      <Helmet>
        <title>Mechaku Admin | Brands</title>
      </Helmet>
      <main className="main-container col-lg-8">
        <h2 className="title">Brands</h2>
        <button className="btn btn-add" onClick={handleNewBrandButton}>
          Add New Brand
        </button>
        <BrandsOverview brandsData={brandsData} />
      </main>
    </>
  );
}
