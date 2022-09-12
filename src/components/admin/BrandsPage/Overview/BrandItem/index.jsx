import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cleanedUp, removeSelectedBrandData } from "features/brand/brandSlice";

export default function BrandItem({ id, no, name, thumbnail }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const brands = useSelector((state) => state.brands);
  const BRAND_THUMBNAIL = "http://localhost:8000/uploads/brands";

  const handleEditButton = () => {
    navigate(`/admin/brands/edit/${id}`);
  };

  const handleDeleteButton = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Selected brand will be removed!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4d17e2",
      cancelButtonColor: "#e4345f",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeSelectedBrandData(id));
      }
    });
  };

  const showBrandThumbnail = () => {
    if (thumbnail) {
      return (
        <img
          src={`${BRAND_THUMBNAIL}/${thumbnail}`}
          className="data-thumbnail"
          alt=""
        />
      );
    }
  };

  const showDeletedAlert = () => {
    // Loading
    if (brands.loading && !brands.error && brands.response === "loading") {
      Swal.fire({
        title: "Loading...",
        text: "Please wait a moment",
        allowEscapeKey: false,
        allowOutsideClick: false,
        showConfirmButton: false,
      });
    }

    // Success
    if (!brands.loading && !brands.error && brands.response === "200-d") {
      Swal.fire({
        title: "Deleted!",
        text: "Successfully remove selected brand data",
        allowEscapeKey: false,
        allowOutsideClick: false,
        confirmButtonText: "OK!",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(cleanedUp());
        }
      });
    }

    // Error
    if (!brands.loading && brands.error && brands.response === "error") {
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
        <td>{showBrandThumbnail()}</td>
        <td>
          <div className="d-flex align-items-center justify-content-center">
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
