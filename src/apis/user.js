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
