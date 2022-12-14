import axios from "axios";

const USER_URL = "https://mechaku-server.zaerodev.my.id/api/user";
const AUTH_URL = "https://mechaku-server.zaerodev.my.id/auth/sign-in";

export async function setSignIn(data) {
  try {
    const response = await axios({
      method: "post",
      url: AUTH_URL,
      data: data,
    });

    return response.data;
  } catch (err) {
    if (err.response.status === 401) {
      return err.response.data;
    }
    console.log(err.message);
  }
}

export async function getAllUser() {
  try {
    const response = await axios.get(USER_URL);

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
}

export async function getUserById(id) {
  try {
    const response = await axios.get(`${USER_URL}/${id}`);

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

export async function putUserData(id, data) {
  try {
    const response = await axios({
      method: "put",
      url: `${USER_URL}/${id}`,
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
