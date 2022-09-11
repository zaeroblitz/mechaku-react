import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanAfterSuccessRemoveCategory,
  removeCategoryData,
} from "features/category/categorySlice";

export default function CategoryItem({ id, no, name, thumbnail }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const THUMBNAIL_URL = `http://localhost:8000/uploads/categories/${thumbnail}`;
  const categories = useSelector((state) => state.categories);

  const handleEditButton = () => {
    navigate(`/admin/categories/edit/${id}`);
  };

  const showDeletedAlert = () => {
    // Loading
    if (
      categories.loading &&
      !categories.error &&
      categories.response === "loading"
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
      !categories.loading &&
      !categories.error &&
      categories.response === "200-d"
    ) {
      Swal.fire({
        title: "Deleted!",
        text: "Successfully remove selected category data",
        allowEscapeKey: false,
        allowOutsideClick: false,
        confirmButtonText: "OK!",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(cleanAfterSuccessRemoveCategory());
        }
      });
    }

    // Error
    if (
      !categories.loading &&
      categories.error &&
      categories.response === "error"
    ) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong",
        confirmButtonText: "OK!",
      });
    }
  };

  const handleDeleteButton = async () => {
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
        dispatch(removeCategoryData(id));
      }
    });
  };

  return (
    <>
      {showDeletedAlert()}
      <tr className="align-middle">
        <td>{no}</td>
        <td>{name}</td>
        <td>
          <img src={THUMBNAIL_URL} className="data-thumbnail" alt="" />
        </td>
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
