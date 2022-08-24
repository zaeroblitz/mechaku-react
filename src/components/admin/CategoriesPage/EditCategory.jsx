import React, { useCallback, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { getCategoryById, putCategoryData } from "apis/category";
import "./styles.css";

export default function EditCategoryComponents() {
  const [data, setData] = useState({});
  const [imagePreview, setImagePreview] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const THUMBNAIL_URL = `http://localhost:8000/uploads/categories/${data.thumbnail}`;

  const getCategoryData = useCallback(async () => {
    const response = await getCategoryById(id);

    if (response.status === "success") {
      setData(response.data);
    }
  }, [getCategoryById]);

  useEffect(() => {
    getCategoryData();
  }, []);

  const onInputNameChange = (e) => {
    setData({
      ...data,
      name: e.target.value,
    });
  };

  const onInputFileChange = (e) => {
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
    } else {
      return <img src={THUMBNAIL_URL} className="category-thumbnail" alt="" />;
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

    const response = await putCategoryData(id, formData);

    if (response.status === "success") {
      Swal.fire({
        title: "Success",
        text: response.message,
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
      <h2 className="title">Edit Category</h2>
      <button className="btn btn-edit mb-4" onClick={onBackRoute}>
        Back
      </button>
      <form className="categories-data-wrapper" onSubmit={onSubmit}>
        <div className="form-group mb-4">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Enter category name..."
            required
            value={data.name}
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
            id="thumbnail"
            className="form-control"
            onChange={onInputFileChange}
          />
        </div>
        <button type="submit" className="btn btn-add-category">
          Save Changes
        </button>
      </form>
    </div>
  );
}
