import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { GridLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateSelectedCourier } from "features/courier/courierSlice";

export default function EditCourierComponents() {
  const [data, setData] = useState({
    name: "",
    thumbnail: "",
  });
  const [imagePreview, setImagePreview] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const couriers = useSelector((state) => state.couriers);
  const selectedCourier = useSelector((state) => state.selectedCourier);
  const THUMBNAIL_URL = `http://localhost:8000/uploads/couriers/${data.thumbnail}`;

  useEffect(() => {
    if (
      !selectedCourier.loading &&
      !selectedCourier.error &&
      Object.keys(selectedCourier.data).length
    ) {
      setData(selectedCourier.data);
    }
  }, [selectedCourier]);

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

    dispatch(updateSelectedCourier(updateData));
  };

  const showCourierThumbnail = () => {
    if (imagePreview) {
      return <img src={imagePreview} className="preview-thumbnail" alt="" />;
    } else {
      if (!data.thumbnail) {
        return <img src={imagePreview} className="preview-thumbnail" alt="" />;
      } else {
        return <img src={THUMBNAIL_URL} className="preview-thumbnail" alt="" />;
      }
    }
  };

  const showLoadingSpinner = () => {
    if (selectedCourier.loading && !Object.keys(selectedCourier.data).length) {
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
      couriers.loading &&
      !couriers.error &&
      couriers.response === "loading"
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
    if (!couriers.loading && !couriers.error && couriers.response === "202") {
      Swal.fire({
        title: "Success",
        text: "Successfully updated brand data",
        icon: "success",
        allowEscapeKey: false,
        allowOutsideClick: false,
        confirmButtonText: "OK!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/admin/couriers");
        }
      });
    }

    // Error
    if (!couriers.loading && couriers.error && couriers.response === "error") {
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
      {!selectedCourier.loading &&
        !selectedCourier.error &&
        Object.keys(selectedCourier.data).length && (
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
                  placeholder="Enter courier name..."
                  required
                  value={data.name}
                  onChange={handleNameChange}
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="thumbnail" className="form-label">
                  Thumbnail
                </label>
                {showCourierThumbnail()}
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
