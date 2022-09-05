import Swal from "sweetalert2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postTransactionStatusData } from "apis/transactionStatus";

export default function CreateTransactionStatusComponents() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setData({
      ...data,
      name: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
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
  );
}
