import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import { postTransactionStatusData } from "apis/transactionStatus";
import "./styles.css";

export default function CreateTransactionStatusComponents() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const onInputNameChange = (e) => {
    setData({
      ...data,
      name: e.target.value,
    });
  };

  const onBackRoute = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const response = await postTransactionStatusData(data);

    if (response.status === "success") {
      Swal.fire({
        title: "Success",
        text: "Berhasil menambah data status transaksi baru",
        icon: "success",
        confirmButtonText: "OK!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/admin/transaction-status");
        }
      });
    }
  };

  return (
    <div className="transaction-status-page-container col-lg-8">
      <h2 className="title">Add New Transaction Status</h2>
      <button className="btn btn-edit mb-4" onClick={onBackRoute}>
        Back
      </button>
      <form className="transaction-status-data-wrapper" onSubmit={onSubmit}>
        <div className="form-group mb-4">
          <label htmlFor="name" className="form-label">
            Transaction Status Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter transaction status name"
            required
            id="name"
            onChange={onInputNameChange}
          />
        </div>
        <button type="submit" className="btn btn-add-transaction-status">
          Create Transaction Status
        </button>
      </form>
    </div>
  );
}
