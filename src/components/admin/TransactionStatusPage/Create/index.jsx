import Swal from "sweetalert2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createNewTransactionStatus } from "features/transactionStatus/transactionStatusSlice";

export default function CreateTransactionStatusComponents() {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const transactionStatus = useSelector((state) => state.transactionStatus);

  const handleNameChange = (e) => {
    setData({
      ...data,
      name: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createNewTransactionStatus(data));
  };

  const showSweetAlert = () => {
    // Loading
    if (
      transactionStatus.loading &&
      !transactionStatus.error &&
      transactionStatus.response === "loading"
    ) {
      Swal.fire({
        title: "Loading...",
        text: "Please wait a moment",
        allowEscapeKey: false,
        allowOutsideClick: false,
        showConfirmButton: false,
      });
    }

    // Success
    if (
      !transactionStatus.loading &&
      !transactionStatus.error &&
      transactionStatus.response === "201"
    ) {
      Swal.fire({
        title: "Success!",
        text: "Successfully add a new transaction status data",
        icon: "success",
        allowEscapeKey: false,
        allowOutsideClick: false,
        confirmButtonText: "OK!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/admin/transaction-status");
        }
      });
    }

    // Error
    if (
      !transactionStatus.loading &&
      transactionStatus.error &&
      transactionStatus.response === "error"
    ) {
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
              Transaction Status Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter transaction status name"
              required
              id="name"
              onChange={handleNameChange}
            />
          </div>
          <button type="submit" className="btn btn-add">
            Create Transaction Status
          </button>
        </form>
      </section>
    </>
  );
}
