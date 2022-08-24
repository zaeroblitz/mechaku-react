import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import { deleteBrand } from "apis/brands";

export default function BrandsItem({ id, no, name, thumbnail }) {
  const navigate = useNavigate();

  const onHandleEdit = (e) => {
    e.prenventDefault();
    const brandsData = {
      id: id,
      no: no,
      name: name,
      thumbnail: thumbnail,
    };

    localStorage.setItem("edit-brands-data", JSON.stringify(brandsData));
    navigate(`/admin/brands/edit/${id}`);
  };

  const onHandleDelete = async (e) => {
    e.prenventDefault();
    const response = await deleteBrand(id);

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
    <tr className="align-middle">
      <td>{no}</td>
      <td>{name}</td>
      <td>
        <img
          src={`http://localhost:8000/uploads/brands/${thumbnail}`}
          className="brand-list-thumbnail"
          alt=""
        />
      </td>
      <td>
        <div className="d-flex align-items-center justify-content-center">
          <button
            className="btn btn-warning btn-edit me-4"
            onClick={() => onHandleEdit()}
          >
            Edit
          </button>
          <button
            className="btn btn-danger btn-delete"
            onClick={() => onHandleDelete()}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}