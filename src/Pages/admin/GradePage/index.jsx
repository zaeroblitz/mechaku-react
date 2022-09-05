import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

import "components/admin/styles.scss";
import { getAllGrades } from "apis/grades";
import GradesOverview from "components/admin/GradesPage/Overview";

export default function AdminGradesPage() {
  const [gradesData, setGradesData] = useState([]);
  const navigate = useNavigate();
  const tokenBase64 = Cookies.get("token");

  useEffect(() => {
    if (tokenBase64) {
      const token = atob(tokenBase64);
      const jwt = jwtDecode(token);

      if (jwt.user.role !== "ADMIN") {
        navigate("/");
      }
    } else {
      navigate("/");
    }
  }, [tokenBase64, navigate]);

  const getGradesData = useCallback(async () => {
    const response = await getAllGrades();

    setGradesData(response.data);
  }, []);

  useEffect(() => {
    getGradesData();
  }, [getGradesData]);

  const handleNewGradeButton = (e) => {
    e.preventDefault();

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
        <GradesOverview gradesData={gradesData} />
      </main>
    </>
  );
}
