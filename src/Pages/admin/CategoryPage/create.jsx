import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "components/admin/styles.scss";
import CreateCategory from "components/admin/CategoriesPage/Create";

export default function AdminCreateCategoryPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.user.role !== "ADMIN") {
      navigate("/");
    }
  }, [auth, navigate, dispatch]);

  const handleBackButton = () => {
    navigate("/admin/categories");
  };

  return (
    <>
      <Helmet>
        <title>Mechaku Admin | Create Category</title>
      </Helmet>
      <main className="main-container col-lg-8">
        <h2 className="title">Create New Category</h2>
        <button className="btn btn-back" onClick={handleBackButton}>
          Back
        </button>
        <CreateCategory />
      </main>
    </>
  );
}
