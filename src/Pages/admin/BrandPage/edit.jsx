import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import "components/admin/styles.scss";
import EditBrand from "components/admin/BrandsPage/Edit";
import {
  cleanedUp,
  fetchSelectedBrandData,
} from "features/brand/selectedBrandSlice";

export default function AdminEditBrandsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.user.role !== "ADMIN") {
      navigate("/");
    } else {
      dispatch(fetchSelectedBrandData(id));
    }

    return () => {
      dispatch(cleanedUp());
    };
  }, [auth, navigate, dispatch, id]);

  const handleBackButton = () => {
    navigate("/admin/brands");
  };

  return (
    <>
      <Helmet>
        <title>Mechaku Admin | Edit Brand</title>
      </Helmet>
      <main className="main-container col-lg-8">
        <h2 className="title">Edit Brand</h2>
        <button className="btn btn-back" onClick={handleBackButton}>
          Back
        </button>
        <EditBrand />
      </main>
    </>
  );
}
