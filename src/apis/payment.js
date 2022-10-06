import axios from "axios";

const PAYMENT_API = "https://mechaku-server.zaerodev.my.id/api/payment";

export async function getAllPayments() {
  try {
    const response = await axios.get(PAYMENT_API);

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
}

export async function getPaymentById(id) {
  try {
    const response = await axios.get(`${PAYMENT_API}/${id}`);

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
}

export async function postPaymentData(data) {
  try {
    const response = await axios({
      method: "post",
      url: PAYMENT_API,
      data: data,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
}

export async function putPaymentData(id, data) {
  try {
    const response = await axios({
      method: "put",
      url: `${PAYMENT_API}/${id}`,
      data: data,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
}

export async function deletePaymentData(id) {
  try {
    const response = await axios.delete(`${PAYMENT_API}/${id}`);

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
}
