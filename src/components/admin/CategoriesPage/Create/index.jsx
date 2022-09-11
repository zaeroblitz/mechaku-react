import Swal from "sweetalert2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createCategoryData } from "features/category/categorySlice";

export default function CreateCategory() {
  const [data, setData] = useState({});
  const [imagePreview, setImagePreview] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

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

    dispatch(createCategoryData(formData));
  };

  const showCategoryThumbnail = () => {
    if (imagePreview) {
      return <img src={imagePreview} className="preview-thumbnail" alt="" />;
    }
  };

  const showSweetAlert = () => {
    // Loading
    if (
      categories.loading &&
      !categories.error &&
      categories.response === "loading"
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
    if (
      !categories.loading &&
      !categories.error &&
      categories.response === "201"
    ) {
      Swal.fire({
        title: "Success!",
        text: "Successfully create a new category data",
        icon: "success",
        allowEscapeKey: false,
        allowOutsideClick: false,
        confirmButtonText: "OK!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/admin/categories");
        }
      });
    }

    // Error
    if (
      !categories.loading &&
      categories.error &&
      categories.response === "error"
    ) {
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
              Category Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter category name"
              required
              id="name"
              onChange={handleNameChange}
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
              onChange={handleThumbnailChange}
            />
          </div>
          <button type="submit" className="btn btn-add">
            Create Category
          </button>
        </form>
      </section>
    </>
  );
}
