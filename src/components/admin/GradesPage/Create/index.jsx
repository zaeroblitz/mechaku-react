import Swal from "sweetalert2";
import { useState } from "react";
import { postGradeData } from "apis/grades";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createNewGrade } from "features/grade/gradeSlice";

export default function CreateGradeComponents() {
  const [data, setData] = useState({});
  const [imagePreview, setImagePreview] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const grades = useSelector((state) => state.grades);

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

    dispatch(createNewGrade(formData));
  };

  const showThumbnail = () => {
    if (imagePreview) {
      return <img src={imagePreview} className="preview-thumbnail" alt="" />;
    }
  };

  const showSweetAlert = () => {
    // Loading
    if (grades.loading && !grades.error && grades.response === "loading") {
      Swal.fire({
        title: "Loading...",
        text: "Please wait a moment",
        allowEscapeKey: false,
        allowOutsideClick: false,
        showConfirmButton: false,
      });
    }

    // Success
    if (!grades.loading && !grades.error && grades.response === "201") {
      Swal.fire({
        title: "Success!",
        text: "Berhasil menambah data brand baru",
        icon: "success",
        allowEscapeKey: false,
        allowOutsideClick: false,
        confirmButtonText: "OK!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/admin/grades");
        }
      });
    }

    // Error
    if (!grades.loading && grades.error && grades.response === "error") {
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
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Enter grade name..."
              required
              onChange={handleNameChange}
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
              onChange={handleThumbnailChange}
            />
          </div>
          <button type="submit" className="btn btn-add">
            Submit
          </button>
        </form>
      </section>
    </>
  );
}
