import { deleteCategoryData } from "apis/category";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./styles.css";

export default function CategoryItem({ id, no, name, thumbnail }) {
  const THUMBNAIL_URL = `http://localhost:8000/uploads/categories/${thumbnail}`;
  const navigate = useNavigate();

  const onEditButtonClick = (e) => {
    e.preventDefault();
    navigate(`/admin/categories/edit/${id}`);
  };

  const onDeleteButtonClick = async (e) => {
    e.preventDefault();

    const response = await deleteCategoryData(id);

    if (response.status === "success") {
      Swal.fire({
        title: "Success!",
        text: response.message,
        icon: "success",
        confirmButtonText: "OK!",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
    }
  };

  return (
    <tr>
      <td>{no}</td>
      <td>{name}</td>
      <td>
        <img src={THUMBNAIL_URL} className="categories-list-thumbnail" alt="" />
      </td>
      <td>
        <div className="d-flex align-items-center justify-content-center">
          <button
            className="btn btn-warning btn-edit me-4"
            onClick={onEditButtonClick}
          >
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
