import Swal from "sweetalert2";
import { GridLoader } from "react-spinners";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedGrade } from "features/grade/gradeSlice";

export default function EditGradeComponents() {
  const [data, setData] = useState({});
  const [imagePreview, setImagePreview] = useState();
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const grades = useSelector((state) => state.grades);
  const selectedGrade = useSelector((state) => state.selectedGrade);
  const GRADE_THUMBNAIL_URL = "http://localhost:8000/uploads/grades";

  useEffect(() => {
    if (!selectedGrade.loading && Object.keys(selectedGrade.data).length) {
      setData(selectedGrade.data);
    }
  }, [selectedGrade]);

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

  const showThumbnail = () => {
    if (imagePreview) {
      return <img src={imagePreview} className="preview-thumbnail" alt="" />;
    } else if (data.thumbnail) {
      return (
        <img
          src={`${GRADE_THUMBNAIL_URL}/${data.thumbnail}`}
          className="preview-thumbnail"
          alt=""
        />
      );
    } else {
      return null;
    }
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

    dispatch(updateSelectedGrade(updateData));
  };

  const showLoadingSpinner = () => {
    if (selectedGrade.loading && !Object.keys(selectedGrade.data).length) {
      return (
        <div className="w-100 h-100 d-flex align-items-center justify-content-center">
          <GridLoader color="#333333" />
        </div>
      );
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
    if (!grades.loading && !grades.error && grades.response === "202") {
      Swal.fire({
        title: "Success",
        text: "Successfully updated brand data",
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
      {showLoadingSpinner()}
      {showSweetAlert()}
      {!selectedGrade.loading && Object.keys(selectedGrade.data).length && (
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
                value={data.name}
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
              Save Changes
            </button>
          </form>
        </section>
      )}
    </>
  );
}
