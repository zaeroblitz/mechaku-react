import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import "components/admin/styles.scss";
import EditCategory from "components/admin/CategoriesPage/Edit";
import {
  cleanedUp,
  fetchSelectedCategory,
} from "features/category/selectedCategorySlice";

export default function AdminEditCategoryPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.user.role !== "ADMIN") {
      navigate("/");
    } else {
      dispatch(fetchSelectedCategory(id));
    }

    return () => {
      dispatch(cleanedUp());
    };
  }, [auth, navigate, dispatch, id]);

  const handleBackButton = () => {
    navigate("/admin/categories");
  };

  return (
    <>
      <Helmet>
        <title>Mechaku Admin | Edit Category</title>
      </Helmet>
      <main className="main-container col-lg-8">
        <h2 className="title">Edit Category</h2>
        <button className="btn btn-back" onClick={handleBackButton}>
          Back
        </button>
        <EditCategory />
      </main>
    </>
  );
}
