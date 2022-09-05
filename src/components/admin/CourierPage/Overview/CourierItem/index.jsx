import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { deleteCourierData } from "apis/couriers";

export default function CourierItem({ id, no, name, thumbnail }) {
  const navigate = useNavigate();
  const THUMBNAIL_URL = "http://localhost:8000/uploads/couriers";

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

  const handleEditButton = (e) => {
    e.preventDefault();

    navigate(`/admin/couriers/edit/${id}`);
  };

  const handleDeleteButton = async (e) => {
    e.preventDefault();

    const response = await deleteCourierData(id);

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
          <button className="btn btn-edit me-4" onClick={handleEditButton}>
            Edit
          </button>
          <button className="btn btn-delete" onClick={handleDeleteButton}>
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}
