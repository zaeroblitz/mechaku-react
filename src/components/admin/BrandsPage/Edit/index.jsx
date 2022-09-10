import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { GridLoader } from "react-spinners";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ThumbnailDefault from "assets/images/pic.png";
import { updateSelectedBrandData } from "features/brand/brandSlice";

export default function EditBrand() {
  const [data, setData] = useState({});
  const [imagePreview, setImagePreview] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedBrand = useSelector((state) => state.selectedBrand);

  useEffect(() => {
    if (!selectedBrand.loading && Object.keys(selectedBrand.data).length) {
      setData(selectedBrand.data);
    }
  }, [selectedBrand]);

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

    dispatch(updateSelectedBrandData({ id, updateData }));

    Swal.fire({
      title: "Success",
      text: "Successfully updated brand data",
      icon: "success",
      confirmButtonText: "OK!",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/admin/brands");
      }
    });
  };

  const showLoadingSpinner = () => {
    if (selectedBrand.loading && !Object.keys(selectedBrand.data).length) {
      return (
        <div className="w-100 h-100 d-flex align-items-center justify-content-center">
          <GridLoader color="#333333" />
        </div>
      );
    }
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

  return (
    <>
      {showLoadingSpinner()}
      {!selectedBrand.loading && Object.keys(selectedBrand.data).length !== 0 && (
        <section className="data-container">
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
        </section>
      )}
    </>
  );
}
