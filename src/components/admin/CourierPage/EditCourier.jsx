import React, { useCallback, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { getCourierById, putCourierData } from "apis/couriers";
import "./styles.css";

export default function EditCourierComponents() {
  const [data, setData] = useState({});
  const [imagePreview, setImagePreview] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const THUMBNAIL_URL = `http://localhost:8000/uploads/couriers/${data.thumbnail}`;

  const getCategoryData = useCallback(async () => {
    const response = await getCourierById(id);

    if (response.status === "success") {
      setData(response.data);
    }
  }, [id]);

  useEffect(() => {
    getCategoryData();
  }, [getCategoryData]);

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

  const showCourierThumbnail = () => {
    if (imagePreview) {
      return <img src={imagePreview} className="courier-thumbnail" alt="" />;
    } else {
      return <img src={THUMBNAIL_URL} className="courier-thumbnail" alt="" />;
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

    const response = await putCourierData(id, formData);

    if (response.status === "success") {
      Swal.fire({
        title: "Success",
        text: response.message,
        icon: "success",
        confirmButtonText: "OK!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/admin/couriers");
        }
      });
    }
  };

  return (
    <div className="couriers-page-container col-lg-8">
      <h2 className="title">Edit Courier</h2>
      <button className="btn btn-edit mb-4" onClick={onBackRoute}>
        Back
      </button>
      {Object.keys(data).length && (
        <form className="couriers-data-wrapper" onSubmit={onSubmit}>
          <div className="form-group mb-4">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Enter courier name..."
              required
              value={data.name}
              onChange={onInputNameChange}
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="thumbnail" className="form-label">
              Thumbnail
            </label>
            {showCourierThumbnail()}
            <input
              type="file"
              id="thumbnail"
              className="form-control"
              onChange={onInputFileChange}
            />
          </div>
          <button type="submit" className="btn btn-add-courier">
            Save Changes
          </button>
        </form>
      )}
    </div>
  );
}
