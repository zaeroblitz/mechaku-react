import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getGradeById, putGradeData } from "apis/grades";
import Swal from "sweetalert2";
import "./styles.css";

export default function EditGradeComponents() {
  const [data, setData] = useState({});
  const [imagePreview, setImagePreview] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const GRADE_THUMBNAIL_URL = "http://localhost:8000/uploads/grades";

  const getGradeData = useCallback(async () => {
    const response = await getGradeById(id);
    setData(response.data);
  }, [getGradeById]);

  useEffect(() => {
    getGradeData();
  }, []);

  const onInputNameChange = (e) => {
    setData({
      ...data,
      name: e.target.value,
    });
  };

  const onInputThumbnailChange = (e) => {
    const [file] = e.target.files;

    setImagePreview(URL.createObjectURL(file));
    setData({
      ...data,
      thumbnail: file,
    });
  };

  const showThumbnail = () => {
    if (imagePreview) {
      return <img src={imagePreview} className="grade-thumbnail" alt="" />;
    } else if (data.thumbnail) {
      return (
        <img
          src={`${GRADE_THUMBNAIL_URL}/${data.thumbnail}`}
          className="grade-thumbnail"
          alt=""
        />
      );
    } else {
      return null;
    }
  };

  const onBackButtonClick = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("thumbnail", data.thumbnail);

    const response = await putGradeData(id, formData);

    if (response.status === "success") {
      Swal.fire({
        title: "Success!",
        text: response.message,
        icon: "success",
        confirmButtonText: "OK!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/admin/grades");
        }
      });
    }
  };

  return (
    <div className="grades-page-container col-lg-8">
      <h2 className="title">Edit Mecha Grade</h2>
      <button className="btn btn-edit mb-5" onClick={onBackButtonClick}>
        Back
      </button>
      <form className="grades-data-wrapper" onSubmit={onSubmit}>
        <div className="form-group mb-4">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Enter grade name..."
            required
            value={data.name}
            onChange={onInputNameChange}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="thumbnail" className="form-label">
            Thumbnail
          </label>
          {showThumbnail()}
          <input
            type="file"
            id="thumbnail"
            className="form-control"
            onChange={onInputThumbnailChange}
          />
        </div>
        <button type="submit" className="btn btn-add-grade">
          Save Changes
        </button>
      </form>
    </div>
  );
}
