import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanAfterSuccessRemoveCourier,
  removeSelectedCourier,
} from "features/courier/courierSlice";

export default function CourierItem({ id, no, name, thumbnail }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const couriers = useSelector((state) => state.couriers);
  const THUMBNAIL_URL =
    "https://mechaku-server.zaerodev.my.id/uploads/couriers";

  const handleEditButton = () => {
    navigate(`/admin/couriers/edit/${id}`);
  };

  const handleDeleteButton = () => {
    dispatch(removeSelectedCourier(id));
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
      couriers.loading &&
      !couriers.error &&
      couriers.response === "loading"
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
    if (!couriers.loading && !couriers.error && couriers.response === "200-d") {
      Swal.fire({
        title: "Deleted!",
        text: "Successfully remove selected courier data",
        allowEscapeKey: false,
        allowOutsideClick: false,
        confirmButtonText: "OK!",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(cleanAfterSuccessRemoveCourier());
        }
      });
    }

    // Error
    if (!couriers.loading && couriers.error && couriers.response === "error") {
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
