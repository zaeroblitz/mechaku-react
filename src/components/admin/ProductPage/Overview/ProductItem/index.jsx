import Swal from "sweetalert2";
import NumberFormat from "react-number-format";
import { useNavigate } from "react-router-dom";
import { deleteProductData } from "apis/products";

export default function ProductItem({
  id,
  no,
  name,
  thumbnail,
  category,
  price,
}) {
  const PRODUCT_THUMBNAIL_URL = "http://localhost:8000/uploads/products";
  const navigate = useNavigate();

  const handleEditButton = (e) => {
    e.preventDefault();

    navigate(`/admin/products/edit/${id}`);
  };

  const handleDeleteButton = async (e) => {
    e.preventDefault();

    const response = await deleteProductData(id);

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

  const showProductThumbnail = () => {
    if (thumbnail) {
      return (
        <img
          src={`${PRODUCT_THUMBNAIL_URL}/${thumbnail}`}
          className="data-thumbnail"
          alt=""
        />
      );
    }
  };

  return (
    <tr className="align-middle">
      <td>{no}</td>
      <td>
        <div className="d-flex align-items-center">
          {showProductThumbnail()}
          <p className="mb-0 ms-2">{name}</p>
        </div>
      </td>
      <td>{category}</td>
      <td>
        <NumberFormat
          value={price}
          prefix="Rp. "
          displayType="text"
          decimalSeparator=","
          thousandSeparator="."
        />
      </td>
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