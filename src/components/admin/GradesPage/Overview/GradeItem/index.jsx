import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanAfterSuccessRemoveGrade,
  removeSelectedGrade,
} from "features/grade/gradeSlice";

export default function GradesItem({ id, no, name, thumbnail }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const grades = useSelector((state) => state.grades);
  const GRADE_THUMBNAIL_URL =
    "https://mechaku-server.zaerodev.my.id/uploads/grades";

  const handleEditButton = () => {
    navigate(`/admin/grades/edit/${id}`);
  };

  const handleDeleteButton = () => {
    Swal.fire({
      title: "Are you sure?",
      text: `Selected grade will be removed!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4d17e2",
      cancelButtonColor: "#e4345f",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeSelectedGrade(id));
      }
    });
  };

  const showGradeThumbnail = () => {
    if (thumbnail) {
      return (
        <img
          src={`${GRADE_THUMBNAIL_URL}/${thumbnail}`}
          className="data-thumbnail"
          alt=""
        />
      );
    }
  };

  const showDeletedAlert = () => {
    // Loading
    if (grades.loading && !grades.error && grades.response === "loading") {
      Swal.fire({
        title: "Loading...",
        text: "Please wait a moment",
        allowEscapeKey: false,
        allowOutsideClick: false,
        showConfirmButton: false,
      });
    }

    // Success
    if (!grades.loading && !grades.error && grades.response === "200-d") {
      Swal.fire({
        title: "Deleted!",
        text: "Successfully remove selected grade data",
        allowEscapeKey: false,
        allowOutsideClick: false,
        confirmButtonText: "OK!",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(cleanAfterSuccessRemoveGrade());
        }
      });
    }

    // Error
    if (!grades.loading && grades.error && grades.response === "error") {
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
        <td>{showGradeThumbnail()}</td>
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
