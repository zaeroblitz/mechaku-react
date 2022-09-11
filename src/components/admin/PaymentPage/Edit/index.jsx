import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { GridLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateSelectedPayment } from "features/payment/paymentSlice";

export default function EditPaymentComponents() {
  const [data, setData] = useState({
    name: "",
    thumbnail: "",
  });
  const [imagePreview, setImagePreview] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const payments = useSelector((state) => state.payments);
  const selectedPayment = useSelector((state) => state.selectedPayment);
  const THUMBNAIL_URL = `http://localhost:8000/uploads/payments/${data.thumbnail}`;

  useEffect(() => {
    if (
      !selectedPayment.loading &&
      !selectedPayment.error &&
      Object.keys(selectedPayment.data).length !== 0
    ) {
      setData(selectedPayment.data);
    }
  }, [selectedPayment]);

  const handleNameChange = (e) => {
    setData({
      ...data,
      name: e.target.value,
    });
  };

  const handleThumbnailChange = (e) => {
    const [file] = e.target.files;

    setImagePreview(URL.createObjectURL(file));
    setData({
      ...data,
      thumbnail: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("thumbnail", data.thumbnail);

    const updateData = {
      id,
      data: formData,
    };

    dispatch(updateSelectedPayment(updateData));
  };

  const showPaymentThumbnail = () => {
    if (imagePreview) {
      return <img src={imagePreview} className="preview-thumbnail" alt="" />;
    } else {
      return <img src={THUMBNAIL_URL} className="preview-thumbnail" alt="" />;
    }
  };

  const showLoadingSpinner = () => {
    if (selectedPayment.loading && !Object.keys(selectedPayment.data).length) {
      return (
        <div className="w-100 h-100 d-flex align-items-center justify-content-center">
          <GridLoader color="#333333" />
        </div>
      );
    }
  };

  const showSweetAlert = () => {
    // Loading
    if (
      payments.loading &&
      !payments.error &&
      payments.response === "loading"
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
    if (!payments.loading && !payments.error && payments.response === "202") {
      Swal.fire({
        title: "Success",
        text: "Successfully updated brand data",
        icon: "success",
        allowEscapeKey: false,
        allowOutsideClick: false,
        confirmButtonText: "OK!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/admin/payments");
        }
      });
    }

    // Error
    if (!payments.loading && payments.error && payments.response === "error") {
      Swal.fire({
        title: "Error",
        text: "Something went wrong",
        icon: "error",
        confirmButtonText: "OK!",
      });
    }
  };

  return (
    <>
      {showLoadingSpinner()}
      {showSweetAlert()}
      {!selectedPayment.loading &&
        !selectedPayment.error &&
        Object.keys(selectedPayment.data).length !== 0 && (
          <section className="data-container">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-4">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Enter payment name..."
                  required
                  value={data.name}
                  onChange={handleNameChange}
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="thumbnail" className="form-label">
                  Thumbnail
                </label>
                {showPaymentThumbnail()}
                <input
                  type="file"
                  id="thumbnail"
                  className="form-control"
                  onChange={handleThumbnailChange}
                />
              </div>
              <button type="submit" className="btn btn-add">
                Save Changes
              </button>
            </form>
          </section>
        )}
    </>
  );
}
