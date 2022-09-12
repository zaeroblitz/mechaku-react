import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanAfterSuccessRemove,
  removeSelectedTransactionStatus,
} from "features/transactionStatus/transactionStatusSlice";

export default function TransactionStatusItem({ id, no, name }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const transactionStatus = useSelector((state) => state.transactionStatus);

  const handleEditButton = (e) => {
    e.preventDefault();

    navigate(`/admin/transaction-status/edit/${id}`);
  };

  const handleDeleteButton = (e) => {
    e.preventDefault();

    dispatch(removeSelectedTransactionStatus(id));
  };

  const showDeletedAlert = () => {
    // Loading
    if (
      transactionStatus.loading &&
      !transactionStatus.error &&
      transactionStatus.response === "loading"
    ) {
      Swal.fire({
        title: "Loading...",
        text: "Please wait a moment",
        allowEscapeKey: false,
        allowOutsideClick: false,
        showConfirmButton: false,
      });
    }

    // Success
    if (
      !transactionStatus.loading &&
      !transactionStatus.error &&
      transactionStatus.response === "200-d"
    ) {
      Swal.fire({
        title: "Deleted!",
        text: "Successfully remove selected transaction status data",
        allowEscapeKey: false,
        allowOutsideClick: false,
        confirmButtonText: "OK!",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(cleanAfterSuccessRemove());
        }
      });
    }

    // Error
    if (
      !transactionStatus.loading &&
      transactionStatus.error &&
      transactionStatus.response === "error"
    ) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong",
        confirmButtonText: "OK!",
      });
    }
  };

  return (
    <>
      {showDeletedAlert()}
      <tr className="align-middle">
        <td>{no}</td>
        <td>{name}</td>
        <td>
          <div className="d-flex justify-content-center align-items-center">
            <button
              className="btn btn-warning btn-edit me-4"
              onClick={handleEditButton}
            >
              Edit
            </button>
            <button
              className="btn btn-danger btn-delete"
              onClick={handleDeleteButton}
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
