import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "components/admin/styles.scss";
import { fetchBrandsData } from "features/brand/brandSlice";
import BrandsOverview from "components/admin/BrandsPage/Overview";

export default function AdminBrandsPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.user.role !== "ADMIN") {
      navigate("/");
    } else {
      dispatch(fetchBrandsData());
    }
  }, [auth, navigate, dispatch]);

  const handleNewBrandButton = (e) => {
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
        <BrandsOverview />
      </main>
    </>
  );
}
