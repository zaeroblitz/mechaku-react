import Swal from "sweetalert2";
import { useCallback, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCategoryById, putCategoryData } from "apis/category";

export default function EditCategory() {
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
  }, [id]);

  useEffect(() => {
    getCategoryData();
  }, [getCategoryData]);

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
    } else {
      if (!data.thumbnail) {
        return <img src={imagePreview} className="preview-thumbnail" alt="" />;
      } else {
        return <img src={THUMBNAIL_URL} className="preview-thumbnail" alt="" />;
      }
    }
  };

  const handleSubmit = async (e) => {
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
    <section className="data-container">
      {Object.keys(data).length !== 0 && (
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
      )}
    </section>
  );
}
