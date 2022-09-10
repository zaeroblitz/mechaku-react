import Swal from "sweetalert2";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createNewBrandData } from "features/brand/brandSlice";

export default function CreateBrand() {
  const [data, setData] = useState({});
  const [imagePreview, setImagePreview] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updateData = new FormData();
    updateData.append("name", data.name);
    updateData.append("thumbnail", data.thumbnail);

    dispatch(createNewBrandData(updateData));

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
  };

  const showBrandThumbnail = () => {
    if (imagePreview) {
      return <img src={imagePreview} alt="" className="preview-thumbnail" />;
    }
  };

  return (
    <section className="data-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-4">
          <label htmlFor="name" className="form-label">
            Brand Name
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Enter the name brand"
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="thumbnail" className="form-label">
            Thumbnail
          </label>
          {showBrandThumbnail()}
          <input
            type="file"
            id="thumbnail"
            className="form-control"
            onChange={handleThumbnailChange}
          />
        </div>
        <button type="submit" className="btn btn-add">
          Create New Brand
        </button>
      </form>
    </section>
  );
}
