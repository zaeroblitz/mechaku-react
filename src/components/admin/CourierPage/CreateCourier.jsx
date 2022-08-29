import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import { postCourierData } from "apis/couriers";
import "./styles.css";

export default function CreateCourierComponents() {
  const [data, setData] = useState({});
  const [imagePreview, setImagePreview] = useState();
  const navigate = useNavigate();

  const onInputNameChange = (e) => {
    setData({
      ...data,
      name: e.target.value,
    });
  };

  const onInputThumbnailChange = (e) => {
    const [file] = e.target.files;

    setImagePreview(URL.createObjectURL(file));

    setData({
      ...data,
      thumbnail: file,
    });
  };

  const showCourierThumbnail = () => {
    if (imagePreview) {
      return <img src={imagePreview} className="courier-thumbnail" alt="" />;
    }
  };

  const onBackRoute = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("thumbnail", data.thumbnail);

    const response = await postCourierData(formData);

    if (response.status === "success") {
      Swal.fire({
        title: "Success",
        text: "Berhasil menambah data kurir baru",
        icon: "success",
        confirmButtonText: "OK!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/admin/couriers");
        }
      });
    }
  };

  return (
    <div className="couriers-page-container col-lg-8">
      <h2 className="title">Add New Courier</h2>
      <button className="btn btn-edit mb-4" onClick={onBackRoute}>
        Back
      </button>
      <form className="couriers-data-wrapper" onSubmit={onSubmit}>
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
            onChange={onInputNameChange}
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
            onChange={onInputThumbnailChange}
          />
        </div>
        <button type="submit" className="btn btn-add-courier">
          Create Courier
        </button>
      </form>
    </div>
  );
}
