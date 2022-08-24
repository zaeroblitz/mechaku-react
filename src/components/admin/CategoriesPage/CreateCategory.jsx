import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import { postCategoryData } from "apis/category";
import "./styles.css";

export default function CreateCategoryComponents() {
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

  const showCategoryThumbnail = () => {
    if (imagePreview) {
      return <img src={imagePreview} className="category-thumbnail" alt="" />;
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

    const response = await postCategoryData(formData);

    if (response.status === "success") {
      Swal.fire({
        title: "Success",
        text: "Berhasil menambah data category baru",
        icon: "success",
        confirmButtonText: "OK!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/admin/categories");
        }
      });
    }
  };

  return (
    <div className="categories-page-container col-lg-8">
      <h2 className="title">Add New Category</h2>
      <button className="btn btn-edit mb-4" onClick={onBackRoute}>
        Back
      </button>
      <form className="categories-data-wrapper" onSubmit={onSubmit}>
        <div className="form-group mb-4">
          <label htmlFor="name" className="form-label">
            Category Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter category name"
            required
            id="name"
            onChange={onInputNameChange}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="thumbnail" className="form-label">
            Thumbnail
          </label>
          {showCategoryThumbnail()}
          <input
            type="file"
            className="form-control"
            id="thumbnail"
            onChange={onInputThumbnailChange}
          />
        </div>
        <button type="submit" className="btn btn-add-category">
          Create Category
        </button>
      </form>
    </div>
  );
}
