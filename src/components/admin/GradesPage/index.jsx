import React from "react";
import GradesList from "./GradesList";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function GradesPageComponent() {
  const navigate = useNavigate();

  const onAddButtonClick = (e) => {
    e.preventDefault();
    navigate("/admin/grades/create");
  };

  return (
    <div className="grades-page-container col-lg-8">
      <h2 className="title">Grades</h2>
      <button className="btn btn-add-grade mb-5" onClick={onAddButtonClick}>
        Add Grade
      </button>
      <GradesList />
    </div>
  );
}
