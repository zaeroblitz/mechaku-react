import axios from "axios";

const USER_URL = "http://localhost:8000/api/user";

export async function getAllUser() {
  try {
    const response = await axios.get(USER_URL);

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
}

export async function postUserData(data) {
  try {
    const response = await axios({
      method: "post",
      url: USER_URL,
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
