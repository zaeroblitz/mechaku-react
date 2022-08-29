import React from "react";
import { useNavigate } from "react-router-dom";
import { deletePaymentData } from "apis/payment";
import Swal from "sweetalert2";

export default function PaymentItem({ id, no, name, thumbnail }) {
  const navigate = useNavigate();
  const THUMBNAIL_URL = "http://localhost:8000/uploads/payments";

  const showThumbnail = () => {
    if (thumbnail) {
      return (
        <img
          src={`${THUMBNAIL_URL}/${thumbnail}`}
          className=".payments-list-thumbnail"
          alt=""
        />
      );
    }
  };

  const onEditButtonClick = (e) => {
    e.preventDefault();

    navigate(`/admin/payments/edit/${id}`);
  };

  const onDeleteButtonClick = async (e) => {
    e.preventDefault();

    const response = await deletePaymentData(id);

    if (response.status === "success") {
      Swal.fire({
        title: "Success!",
        text: response.message,
        icon: "success",
        confirmButtonText: "OK!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate(0);
        }
      });
    }
  };

  return (
    <tr className="align-middle">
      <td>{no}</td>
      <td>{name}</td>
      <td>{showThumbnail()}</td>
      <td>
        <div className="d-flex justify-content-center align-items-center">
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
