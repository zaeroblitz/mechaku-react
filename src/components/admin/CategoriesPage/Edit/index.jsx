import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateCategoryData } from "features/category/categorySlice";

export default function EditCategory() {
  const [data, setData] = useState({
    name: "",
    thumbnail: "",
  });
  const [imagePreview, setImagePreview] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector((state) => state.categories);
  const selectedCategory = useSelector((state) => state.selectedCategory);
  const THUMBNAIL_URL = `http://localhost:8000/uploads/categories/${data.thumbnail}`;

  useEffect(() => {
    if (
      !selectedCategory.loading &&
      !selectedCategory.error &&
      Object.keys(selectedCategory.data).length
    ) {
      setData(selectedCategory.data);
    }
  }, [selectedCategory]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("thumbnail", data.thumbnail);

    const updateData = {
      id,
      data: formData,
    };

    dispatch(updateCategoryData(updateData));
  };

  const showCategoryThumbnail = () => {
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
      categories.response === "202"
    ) {
      Swal.fire({
        title: "Success",
        text: "Successfully updated category data",
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
      {!selectedCategory.loading &&
        !selectedCategory.error &&
        Object.keys(selectedCategory.data).length && (
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
                  placeholder="Enter category name..."
                  required
                  value={data.name}
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
