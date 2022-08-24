import { deleteGradeData } from "apis/grades";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./styles.css";

export default function GradesItem({ id, no, name, thumbnail }) {
  const GRADE_THUMBNAIL_URL = "http://localhost:8000/uploads/grades";
  const navigate = useNavigate();

  const onEditButtonClick = (e) => {
    e.preventDefault();
    navigate(`/admin/grades/edit/${id}`);
  };

  const onDeleteButtonClick = async (e) => {
    e.preventDefault();

    const response = await deleteGradeData(id);

    if (response.status === "success") {
      Swal.fire({
        title: "Success!",
        text: response.message,
        icon: "success",
        confirmButtonText: "OK!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/admin/grades");
          window.location.reload();
        }
      });
    }
  };

  const showGradeThumbnail = () => {
    if (thumbnail) {
      return (
        <img
          src={`${GRADE_THUMBNAIL_URL}/${thumbnail}`}
          className="grades-list-thumbnail"
          alt=""
        />
      );
    }
  };

  return (
    <tr className="align-middle">
      <td>{no}</td>
      <td>{name}</td>
      <td>{showGradeThumbnail()}</td>
      <td>
        <div className="d-flex align-items-center justify-content-center">
          <button className="btn btn-edit me-4" onClick={onEditButtonClick}>
            Edit
          </button>
          <button
            className="btn btn-danger btn-delete"
            onClick={onDeleteButtonClick}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}
