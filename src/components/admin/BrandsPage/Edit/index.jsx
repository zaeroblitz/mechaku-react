import Swal from "sweetalert2";
import { GridLoader } from "react-spinners";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import ThumbnailDefault from "assets/images/pic.png";
import { updateSelectedBrandData } from "features/brand/brandSlice";

export default function EditBrand() {
  const [data, setData] = useState({
    name: "",
    thumbnail: "",
  });
  const [imagePreview, setImagePreview] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.brands);
  const selectedBrand = useSelector((state) => state.selectedBrand);

  useEffect(() => {
    if (
      !selectedBrand.loading &&
      !selectedBrand.error &&
      Object.keys(selectedBrand.data).length !== 0
    ) {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const updateData = new FormData();
    updateData.append("name", data.name);
    updateData.append("thumbnail", data.thumbnail);

    dispatch(updateSelectedBrandData({ id, updateData }));
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

  const showSweetAlert = () => {
    // Loading
    if (brands.loading && !brands.error && brands.response === "loading") {
      Swal.fire({
        title: "Loading...",
        text: "Please wait a moment",
        allowEscapeKey: false,
        allowOutsideClick: false,
        showConfirmButton: false,
      });
    }

    // Success
    if (!brands.loading && !brands.error && brands.response === "202") {
      Swal.fire({
        title: "Success",
        text: "Successfully updated brand data",
        icon: "success",
        allowEscapeKey: false,
        allowOutsideClick: false,
        confirmButtonText: "OK!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/admin/brands");
        }
      });
    }

    // Error
    if (!brands.loading && brands.error && brands.response === "error") {
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
      {showLoadingSpinner()}
      {showSweetAlert()}
      {!selectedBrand.loading &&
        !selectedBrand.error &&
        Object.keys(selectedBrand.data).length !== 0 && (
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
