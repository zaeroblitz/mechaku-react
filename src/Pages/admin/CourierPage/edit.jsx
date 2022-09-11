import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "components/admin/styles.scss";
import EditCourierComponents from "components/admin/CourierPage/Edit";
import {
  cleanedUp,
  fetchSelectedCourier,
} from "features/courier/selectedCourierSlice";

export default function AdminEditCourierPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.user.role !== "ADMIN") {
      navigate("/");
    } else {
      dispatch(fetchSelectedCourier(id));
    }

    return () => {
      dispatch(cleanedUp());
    };
  }, [auth, navigate, dispatch, id]);

  const handleBackButton = () => {
    navigate("/admin/couriers");
  };

  return (
    <>
      <Helmet>
        <title>Mechaku Admin | Edit Courier</title>
      </Helmet>
      <main className="main-container col-lg-8">
        <h2 className="title">Edit Courier</h2>
        <button className="btn btn-back" onClick={handleBackButton}>
          Back
        </button>
        <EditCourierComponents />
      </main>
    </>
  );
}
