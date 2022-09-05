import Swal from "sweetalert2";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { getBrandById, updateBrand } from "apis/brands";
import ThumbnailDefault from "assets/images/pic.png";

export default function EditBrand() {
  const [data, setData] = useState({});
  const [imagePreview, setImagePreview] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  const getBrandData = useCallback(async () => {
    if (id) {
      const response = await getBrandById(id);

      setData(response.data);
    }
  }, [id]);

  useEffect(() => {
    getBrandData();
  }, [getBrandData]);

  const handleThumbnailChange = (e) => {
    const [file] = e.target.files;
    setImagePreview(URL.createObjectURL(file));
    setData({
      ...data,
      thumbnail: file,
    });
  };

  const handleNameChange = (e) => {
    setData({
      ...data,
      name: e.target.value,
    });
  };

  const showBrandThumbnail = () => {
    if (imagePreview) {
      return <img src={imagePreview} alt="" className="preview-thumbnail" />;
    } else if (data.thumbnail) {
      return (
        <img
          src={`http://localhost:8000/uploads/brands/${data.thumbnail}`}
          alt=""
          className="preview-thumbnail"
        />
      );
    } else {
      return (
        <img src={ThumbnailDefault} alt="" className="preview-thumbnail" />
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updateData = new FormData();
    updateData.append("name", data.name);
    updateData.append("thumbnail", data.thumbnail);

    const response = await updateBrand(id, updateData);

    if (response.status === "success") {
      Swal.fire({
        title: "Success!",
        text: response.message,
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
    <section className="data-container">
      {Object.keys(data).length !== 0 && (
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-4">
            <label htmlFor="name" className="form-label">
              Brand Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={data.name}
              onChange={handleNameChange}
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
