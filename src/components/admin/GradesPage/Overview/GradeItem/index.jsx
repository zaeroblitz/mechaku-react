import Swal from "sweetalert2";
import { deleteGradeData } from "apis/grades";
import { useNavigate } from "react-router-dom";

export default function GradesItem({ id, no, name, thumbnail }) {
  const GRADE_THUMBNAIL_URL = "http://localhost:8000/uploads/grades";
  const navigate = useNavigate();

  const onEditButtonClick = (e) => {
    e.preventDefault();
    navigate(`/admin/grades/edit/${id}`);
  };

  const onDeleteButtonClick = async (e) => {
    e.preventDefault();

    const response = await deleteGradeData(id);

    if (response.status === "success") {
      Swal.fire({
        title: "Success!",
        text: response.message,
        icon: "success",
        confirmButtonText: "OK!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/admin/grades");
          window.location.reload();
        }
      });
    }
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

  return (
    <tr className="align-middle">
      <td>{no}</td>
      <td>{name}</td>
      <td>{showGradeThumbnail()}</td>
      <td>
        <div className="d-flex align-items-center justify-content-center">
          <button className="btn btn-edit me-4" onClick={onEditButtonClick}>
            Edit
          </button>
          <button className="btn btn-delete" onClick={onDeleteButtonClick}>
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}
