import axios from "axios";
const TRANSACTION_API = "http://localhost:8000/api/transaction";

export async function postTransactionData(data) {
  try {
    const response = await axios.post(TRANSACTION_API, data);

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
}
