import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { createBrand } from "apis/brands";
import "./styles.css";

export default function CreateBrandsComponents() {
  const [data, setData] = useState({});
  const [imagePreview, setImagePreview] = useState();

  const navigate = useNavigate();

  const onThumbnailFileChange = (e) => {
    const [file] = e.target.files;
    setImagePreview(URL.createObjectURL(file));
    setData({
      ...data,
      thumbnail: file,
    });
  };

  const onBrandNameChange = (e) => {
    setData({
      ...data,
      name: e.target.value,
    });
  };

  const showBrandThumbnail = () => {
    if (imagePreview) {
      return <img src={imagePreview} alt="" className="brand-thumbnail" />;
    }
  };

  const onBackRoute = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const updateData = new FormData();
    updateData.append("name", data.name);
    updateData.append("thumbnail", data.thumbnail);

    const response = await createBrand(updateData);

    if (response.status === "success") {
      Swal.fire({
        title: "Success!",
        text: "Berhasil menambah data brand baru",
        icon: "success",
        confirmButtonText: "OK!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/admin/brands");
        }
      });
    }
  };

  return (
    <div className="brands-page-container col-lg-8">
      <h2 className="title">Add New Brand</h2>
      <button className="btn btn-primary btn-edit mb-4" onClick={onBackRoute}>
        Back
      </button>
      <form className="categories-data-wrapper" onSubmit={onSubmit}>
        <div className="form-group mb-4">
          <label htmlFor="name" className="form-label">
            Brand Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter the name brand"
            required
            onChange={onBrandNameChange}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="thumbnail" className="form-label">
            Thumbnail
          </label>
          {showBrandThumbnail()}
          <input
            type="file"
            className="form-control"
            onChange={onThumbnailFileChange}
          />
        </div>
        <button type="submit" className="btn btn-add-brands">
          Save Brand
        </button>
      </form>
    </div>
  );
}
