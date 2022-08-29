import React, { useCallback, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { getPaymentById, putPaymentData } from "apis/payment";
import "./styles.css";

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

  const showPaymentThumbnail = () => {
    if (imagePreview) {
      return <img src={imagePreview} className="payment-thumbnail" alt="" />;
    } else {
      return <img src={THUMBNAIL_URL} className="payment-thumbnail" alt="" />;
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
    <div className="payments-page-container col-lg-8">
      <h2 className="title">Edit Payment</h2>
      <button className="btn btn-edit mb-4" onClick={onBackRoute}>
        Back
      </button>
      {Object.keys(data).length && (
        <form className="payments-data-wrapper" onSubmit={onSubmit}>
          <div className="form-group mb-4">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Enter payemnt name..."
              required
              value={data.name}
              onChange={onInputNameChange}
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
              onChange={onInputFileChange}
            />
          </div>
          <button type="submit" className="btn btn-add-payment">
            Save Changes
          </button>
        </form>
      )}
    </div>
  );
}
