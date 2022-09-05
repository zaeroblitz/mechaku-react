import Swal from "sweetalert2";
import { useCallback, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPaymentById, putPaymentData } from "apis/payment";

export default function EditPaymentComponents() {
  const [data, setData] = useState({});
  const [imagePreview, setImagePreview] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const THUMBNAIL_URL = `http://localhost:8000/uploads/payments/${data.thumbnail}`;

  const getPaymentData = useCallback(async () => {
    const response = await getPaymentById(id);

    if (response.status === "success") {
      setData(response.data);
    }
  }, [id]);

  useEffect(() => {
    getPaymentData();
  }, [getPaymentData]);

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

  const showPaymentThumbnail = () => {
    if (imagePreview) {
      return <img src={imagePreview} className="preview-thumbnail" alt="" />;
    } else {
      return <img src={THUMBNAIL_URL} className="preview-thumbnail" alt="" />;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("thumbnail", data.thumbnail);

    const response = await putPaymentData(id, formData);

    if (response.status === "success") {
      Swal.fire({
        title: "Success",
        text: response.message,
        icon: "success",
        confirmButtonText: "OK!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/admin/payments");
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
              placeholder="Enter payment name..."
              required
              value={data.name}
              onChange={handleNameChange}
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="thumbnail" className="form-label">
              Thumbnail
            </label>
            {showPaymentThumbnail()}
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
