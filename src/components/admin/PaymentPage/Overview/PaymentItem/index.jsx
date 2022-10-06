import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanAfterSuccessRemovePayment,
  removeSelectedPayment,
} from "features/payment/paymentSlice";

export default function PaymentItem({ id, no, name, thumbnail }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const payments = useSelector((state) => state.payments);
  const THUMBNAIL_URL =
    "https://mechaku-server.zaerodev.my.id/uploads/payments";

  const handleEditButton = () => {
    navigate(`/admin/payments/edit/${id}`);
  };

  const handleDeleteButton = () => {
    dispatch(removeSelectedPayment(id));
  };

  const showThumbnail = () => {
    if (thumbnail) {
      return (
        <img
          src={`${THUMBNAIL_URL}/${thumbnail}`}
          className="data-thumbnail"
          alt=""
        />
      );
    }
  };

  const showDeletedAlert = () => {
    // Loading
    if (
      payments.loading &&
      !payments.error &&
      payments.response === "loading"
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
    if (!payments.loading && !payments.error && payments.response === "200-d") {
      Swal.fire({
        title: "Deleted!",
        text: "Successfully remove selected payment data",
        allowEscapeKey: false,
        allowOutsideClick: false,
        confirmButtonText: "OK!",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(cleanAfterSuccessRemovePayment());
        }
      });
    }

    // Error
    if (!payments.loading && payments.error && payments.response === "error") {
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
        <td>{showThumbnail()}</td>
        <td>
          <div className="d-flex justify-content-center align-items-center">
            <button className="btn btn-edit me-4" onClick={handleEditButton}>
              Edit
            </button>
            <button className="btn btn-delete" onClick={handleDeleteButton}>
              Delete
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
