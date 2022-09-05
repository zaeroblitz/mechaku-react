import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { deleteBrand } from "apis/brands";

export default function BrandItem({ id, no, name, thumbnail }) {
  const navigate = useNavigate();

  const handleEditButton = (e) => {
    e.preventDefault();

    navigate(`/admin/brands/edit/${id}`);
  };

  const handleDeleteButton = async (e) => {
    e.preventDefault();

    const response = await deleteBrand(id);

    if (response.status === "success") {
      Swal.fire({
        title: "Success!",
        text: response.message,
        icon: "success",
        confirmButtonText: "OK!",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
    }
  };

  return (
    <tr className="align-middle">
      <td>{no}</td>
      <td>{name}</td>
      <td>
        <img
          src={`http://localhost:8000/uploads/brands/${thumbnail}`}
          className="data-thumbnail"
          alt=""
        />
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
  );
}
