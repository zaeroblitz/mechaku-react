import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import "components/admin/styles.scss";
import EditGradeComponents from "components/admin/GradesPage/Edit";
import { fetchSelectedGrade } from "features/grade/selectedGradeSlice";

export default function AdminEditGradePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.user.role !== "ADMIN") {
      navigate("/");
    } else {
      dispatch(fetchSelectedGrade(id));
    }
  }, [auth, navigate, dispatch, id]);

  const handleBackButton = () => {
    navigate("/admin/grades");
  };

  return (
    <>
      <Helmet>
        <title>Mechaku Admin | Edit Grade</title>
      </Helmet>
      <main className="main-container col-lg-8">
        <h2 className="title">Edit Grade</h2>
        <button className="btn btn-back" onClick={handleBackButton}>
          Back
        </button>
        <EditGradeComponents />
      </main>
    </>
  );
}
