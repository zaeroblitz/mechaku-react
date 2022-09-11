import Swal from "sweetalert2";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createNewCourier } from "features/courier/courierSlice";

export default function CreateCourierComponents() {
  const [data, setData] = useState({});
  const [imagePreview, setImagePreview] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const couriers = useSelector((state) => state.couriers);

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

    dispatch(createNewCourier(formData));
  };

  const showCourierThumbnail = () => {
    if (imagePreview) {
      return <img src={imagePreview} className="preview-thumbnail" alt="" />;
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
    if (!couriers.loading && !couriers.error && couriers.response === "201") {
      Swal.fire({
        title: "Success!",
        text: "Successfully add a new grade data",
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
      {showSweetAlert()}
      <section className="data-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-4">
            <label htmlFor="name" className="form-label">
              Courier Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter courier name"
              required
              id="name"
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
              className="form-control"
              id="thumbnail"
              onChange={handleThumbnailChange}
            />
          </div>
          <button type="submit" className="btn btn-add">
            Create New Courier
          </button>
        </form>
      </section>
    </>
  );
}
