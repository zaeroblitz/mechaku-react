import Swal from "sweetalert2";
import { useCallback, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getTransactionStatusById,
  putTransactionStatusData,
} from "apis/transactionStatus";

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

  const handleNameChange = (e) => {
    setData({
      ...data,
      name: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
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
      )}
    </section>
  );
}
