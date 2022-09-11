import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "components/admin/styles.scss";
import { fetchCouriersData } from "features/courier/courierSlice";
import CouriersOverview from "components/admin/CourierPage/Overview";

export default function AdminCourierPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.user.role !== "ADMIN") {
      navigate("/");
    } else {
      dispatch(fetchCouriersData());
    }
  }, [auth, navigate, dispatch]);

  const handleNewCourierButton = () => {
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
        <CouriersOverview />
      </main>
    </>
  );
}
