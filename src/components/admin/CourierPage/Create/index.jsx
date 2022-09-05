import Swal from "sweetalert2";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postCourierData } from "apis/couriers";

export default function CreateCourierComponents() {
  const [data, setData] = useState({});
  const [imagePreview, setImagePreview] = useState();
  const navigate = useNavigate();

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

  const showCourierThumbnail = () => {
    if (imagePreview) {
      return <img src={imagePreview} className="data-thumbnail" alt="" />;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("thumbnail", data.thumbnail);

    const response = await postCourierData(formData);

    if (response.status === "success") {
      Swal.fire({
        title: "Success",
        text: response.message,
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
  );
}
