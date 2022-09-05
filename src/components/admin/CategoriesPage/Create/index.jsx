import Swal from "sweetalert2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postCategoryData } from "apis/category";

export default function CreateCategory() {
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

  const showCategoryThumbnail = () => {
    if (imagePreview) {
      return <img src={imagePreview} className="preview-thumbnail" alt="" />;
    }
  };

  const handleSubmit = async (e) => {
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
  );
}
