import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import { postPaymentData } from "apis/payment";
import "./styles.css";

export default function CreatePaymentComponents() {
  const [data, setData] = useState({});
  const [imagePreview, setImagePreview] = useState();
  const navigate = useNavigate();

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

  const showPaymentThumbnail = () => {
    if (imagePreview) {
      return <img src={imagePreview} className="payment-thumbnail" alt="" />;
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

    const response = await postPaymentData(formData);

    if (response.status === "success") {
      Swal.fire({
        title: "Success",
        text: "Berhasil menambah data pembayaran baru",
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
      <h2 className="title">Add New Payment</h2>
      <button className="btn btn-edit mb-4" onClick={onBackRoute}>
        Back
      </button>
      <form className="payments-data-wrapper" onSubmit={onSubmit}>
        <div className="form-group mb-4">
          <label htmlFor="name" className="form-label">
            Payment Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter payment name"
            required
            id="name"
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
            className="form-control"
            id="thumbnail"
            onChange={onInputThumbnailChange}
          />
        </div>
        <button type="submit" className="btn btn-add-payment">
          Create Payment
        </button>
      </form>
    </div>
  );
}
