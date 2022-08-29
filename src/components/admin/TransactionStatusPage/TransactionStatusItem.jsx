import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteTransactionStatusData } from "apis/transactionStatus";
import Swal from "sweetalert2";

export default function TransactionStatusItem({ id, no, name }) {
  const navigate = useNavigate();

  const onEditButtonClick = (e) => {
    e.preventDefault();

    navigate(`/admin/transaction-status/edit/${id}`);
  };

  const onDeleteButtonClick = async (e) => {
    e.preventDefault();

    const response = await deleteTransactionStatusData(id);

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
