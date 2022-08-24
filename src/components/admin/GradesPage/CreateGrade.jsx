import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { postGradeData } from "apis/grades";

export default function CreateGradeComponents() {
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

  const onBackButtonClick = (e) => {
    e.preventDefault();

    navigate(-1);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("thumbnail", data.thumbnail);

    const response = await postGradeData(data);

    if (response.status === "success") {
      Swal.fire({
        title: "Success",
        text: response.message,
        icon: "success",
        confirmButtonText: "OK!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/admin/grades");
        }
      });
    }
  };

  const showThumbnail = () => {
    if (imagePreview) {
      return <img src={imagePreview} className="grade-thumbnail" alt="" />;
    }
  };

  return (
    <div className="grades-page-container col-lg-8">
      <h2 className="title">Add New Mecha Grade</h2>
      <button className="btn btn-edit mb-5" onClick={onBackButtonClick}>
        Back
      </button>
      <form className="grades-data-wrapper" onSubmit={onSubmit}>
        <div className="form-group mb-4">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Enter grade name..."
            required
            onChange={onInputNameChange}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="thumbnail" className="form-label">
            Thumbnail
          </label>
          {showThumbnail()}
          <input
            type="file"
            id="thumbnail"
            className="form-control"
            onChange={onInputThumbnailChange}
          />
        </div>
        <button type="submit" className="btn btn-add-grade">
          Submit
        </button>
      </form>
    </div>
  );
}
