import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "components/admin/styles.scss";
import CreateBrand from "components/admin/BrandsPage/Create";

export default function AdminCreateBrandsPage() {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.user.role !== "ADMIN") {
      navigate("/");
    }
  }, [auth, navigate]);

  const handleBackButton = () => {
    navigate("/admin/brands");
  };

  return (
    <>
      <Helmet>
        <title>Mechaku Admin | Create Brand</title>
      </Helmet>
      <main className="main-container col-lg-8">
        <h2 className="title">Create New Brand</h2>
        <button className="btn btn-back" onClick={handleBackButton}>
          Back
        </button>
        <CreateBrand />
      </main>
    </>
  );
}
