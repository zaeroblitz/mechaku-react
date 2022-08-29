import React, { useCallback, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import {
  getTransactionStatusById,
  putTransactionStatusData,
} from "apis/transactionStatus";
import "./styles.css";

export default function EditTransactionStatusComponents() {
  const [data, setData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const getTransactionStatusData = useCallback(async () => {
    const response = await getTransactionStatusById(id);

    if (response.status === "success") {
      setData(response.data);
    }
  }, [id]);

  useEffect(() => {
    getTransactionStatusData();
  }, [getTransactionStatusData]);

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

    const response = await putTransactionStatusData(id, data);

    if (response.status === "success") {
      Swal.fire({
        title: "Success",
        text: response.message,
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
      <h2 className="title">Edit Transaction Status</h2>
      <button className="btn btn-edit mb-4" onClick={onBackRoute}>
        Back
      </button>
      {Object.keys(data).length && (
        <form className="transaction-status-data-wrapper" onSubmit={onSubmit}>
          <div className="form-group mb-4">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Enter transaction status name..."
              required
              value={data.name}
              onChange={onInputNameChange}
            />
          </div>
          <button type="submit" className="btn btn-add-transaction-status">
            Save Changes
          </button>
        </form>
      )}
    </div>
  );
}
