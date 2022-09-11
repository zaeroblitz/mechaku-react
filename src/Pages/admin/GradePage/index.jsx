import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "components/admin/styles.scss";
import { fetchGradesData } from "features/grade/gradeSlice";
import GradesOverview from "components/admin/GradesPage/Overview";

export default function AdminGradesPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.user.role !== "ADMIN") {
      navigate("/");
    } else {
      dispatch(fetchGradesData());
    }
  }, [auth, navigate, dispatch]);

  const handleNewGradeButton = () => {
    navigate("/admin/grades/create");
  };

  return (
    <>
      <Helmet>
        <title>Mechaku Admin | Grades</title>
      </Helmet>
      <main className="main-container col-lg-8">
        <h2 className="title">Grades</h2>
        <button className="btn btn-add" onClick={handleNewGradeButton}>
          Add New Grade
        </button>
        <GradesOverview />
      </main>
    </>
  );
}
