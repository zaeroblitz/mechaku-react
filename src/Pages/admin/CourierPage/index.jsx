import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

import "components/admin/styles.scss";
import { getAllCouriersData } from "apis/couriers";
import CouriersOverview from "components/admin/CourierPage/Overview";

export default function AdminCourierPage() {
  const [couriersData, setCouriersData] = useState([]);
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

  const getCouriersData = useCallback(async () => {
    const response = await getAllCouriersData();

    setCouriersData(response.data);
  }, []);

  useEffect(() => {
    getCouriersData();
  }, [getCouriersData]);

  const handleNewCourierButton = (e) => {
    e.preventDefault();

    navigate("/admin/couriers/create");
  };

  return (
    <>
      <Helmet>
        <title>Mechaku Admin | Couriers</title>
      </Helmet>
      <main className="main-container col-lg-8">
        <h2 className="title">Couriers</h2>
        <button className="btn btn-add" onClick={handleNewCourierButton}>
          Add New Courier
        </button>
        <CouriersOverview couriersData={couriersData} />
      </main>
    </>
  );
}
