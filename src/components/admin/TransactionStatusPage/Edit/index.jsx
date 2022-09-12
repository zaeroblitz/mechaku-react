import Swal from "sweetalert2";
import { GridLoader } from "react-spinners";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedTransactionStatus } from "features/transactionStatus/transactionStatusSlice";

export default function EditTransactionStatusComponents() {
  const [data, setData] = useState({
    name: "",
  });
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const transactionStatus = useSelector((state) => state.transactionStatus);
  const selectedTransactionStatus = useSelector(
    (state) => state.selectedTransactionStatus
  );

  useEffect(() => {
    if (
      !selectedTransactionStatus.loading &&
      !selectedTransactionStatus.error &&
      Object.keys(selectedTransactionStatus.data).length !== 0
    ) {
      setData(selectedTransactionStatus.data);
    }
  }, [selectedTransactionStatus]);

  const handleNameChange = (e) => {
    setData({
      ...data,
      name: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateSelectedTransactionStatus({ id, data }));
  };

  const showLoadingSpinner = () => {
    if (
      selectedTransactionStatus.loading &&
      !Object.keys(selectedTransactionStatus.data).length
    ) {
      return (
        <div className="w-100 h-100 d-flex align-items-center justify-content-center">
          <GridLoader color="#333333" />
        </div>
      );
    }
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
      transactionStatus.response === "202"
    ) {
      Swal.fire({
        title: "Success",
        text: "Successfully updated transaction status data",
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
      {showLoadingSpinner()}
      {showSweetAlert()}
      {!selectedTransactionStatus.loading &&
        !selectedTransactionStatus.error &&
        Object.keys(selectedTransactionStatus.data).length !== 0 && (
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
                  placeholder="Enter transaction status name..."
                  required
                  value={data.name}
                  onChange={handleNameChange}
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
