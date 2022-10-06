import Swal from "sweetalert2";
import NumberFormat from "react-number-format";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanedUpAfterRemove,
  removeSelectedProduct,
} from "features/product/productSlice";

export default function ProductItem({
  id,
  no,
  name,
  thumbnail,
  category,
  price,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products);
  const PRODUCT_THUMBNAIL_URL =
    "https://mechaku-server.zaerodev.my.id/uploads/products";

  const handleEditButton = () => {
    navigate(`/admin/products/edit/${id}`);
  };

  const handleDeleteButton = (e) => {
    e.preventDefault();
    dispatch(removeSelectedProduct(id));
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

  const showDeletedAlert = () => {
    // Loading
    if (
      products.loading &&
      !products.error &&
      products.response === "loading"
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
    if (!products.loading && !products.error && products.response === "200-d") {
      Swal.fire({
        title: "Deleted!",
        text: "Successfully remove selected product data",
        icon: "success",
        allowEscapeKey: false,
        allowOutsideClick: false,
        confirmButtonText: "OK!",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(cleanedUpAfterRemove());
        }
      });
    }

    // Error
    if (!products.loading && products.error && products.response === "error") {
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
    </>
  );
}
