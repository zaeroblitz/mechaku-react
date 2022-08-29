import axios from "axios";

const TRANSACTION_STATUS_API = "http://localhost:8000/api/transaction-status";

export async function getAllTransactionStatus() {
  try {
    const response = await axios.get(TRANSACTION_STATUS_API);

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
}

export async function getTransactionStatusById(id) {
  try {
    const response = await axios.get(`${TRANSACTION_STATUS_API}/${id}`);

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
}

export async function postTransactionStatusData(data) {
  try {
    const response = await axios.post(TRANSACTION_STATUS_API, data);

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
}

export async function putTransactionStatusData(id, data) {
  try {
    const response = await axios.put(`${TRANSACTION_STATUS_API}/${id}`, data);

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
}

export async function deleteTransactionStatusData(id) {
  try {
    const response = await axios.delete(`${TRANSACTION_STATUS_API}/${id}`);

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
}
