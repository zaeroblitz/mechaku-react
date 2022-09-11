import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "components/admin/styles.scss";
import CreateGradeComponents from "components/admin/GradesPage/Create";

export default function AdminCreateGradePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.user.role !== "ADMIN") {
      navigate("/");
    }
  }, [auth, navigate, dispatch]);

  const handleBackButton = () => {
    navigate("/admin/grades");
  };

  return (
    <>
      <Helmet>
        <title>Mechaku Admin | Create Grade</title>
      </Helmet>
      <main className="main-container col-lg-8">
        <h2 className="title">Create New Grade</h2>
        <button className="btn btn-back" onClick={handleBackButton}>
          Back
        </button>
        <CreateGradeComponents />
      </main>
    </>
  );
}
