import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeSelectedBrandData } from "features/brand/brandSlice";

export default function BrandItem({ id, no, name, thumbnail }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEditButton = () => {
    navigate(`/admin/brands/edit/${id}`);
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
        dispatch(removeSelectedBrandData(id));

        Swal.fire("Deleted!", "Selected brand has been deleted.", "success");
      }
    });
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
