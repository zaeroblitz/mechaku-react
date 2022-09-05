import Swal from "sweetalert2";
import { useCallback, useEffect, useState } from "react";
import { getGradeById, putGradeData } from "apis/grades";
import { useNavigate, useParams } from "react-router-dom";

export default function EditGradeComponents() {
  const [data, setData] = useState({});
  const [imagePreview, setImagePreview] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const GRADE_THUMBNAIL_URL = "http://localhost:8000/uploads/grades";

  const getGradeData = useCallback(async () => {
    const response = await getGradeById(id);
    setData(response.data);
  }, [id]);

  useEffect(() => {
    getGradeData();
  }, [getGradeData]);

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
  );
}
