import axios from "axios";

const COURIER_API = "https://mechaku-server.zaerodev.my.id/api/courier";

export async function getAllCouriersData() {
  try {
    const response = await axios.get(COURIER_API);

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
}

export async function getCourierById(id) {
  try {
    const response = await axios.get(`${COURIER_API}/${id}`);

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
}

export async function postCourierData(data) {
  try {
    const response = await axios({
      method: "post",
      url: COURIER_API,
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

export async function putCourierData(id, data) {
  try {
    const response = await axios({
      method: "put",
      url: `${COURIER_API}/${id}`,
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

export async function deleteCourierData(id) {
  try {
    const response = await axios.delete(`${COURIER_API}/${id}`);

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
}
