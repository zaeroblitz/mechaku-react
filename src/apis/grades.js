import axios from "axios";

const GRADE_URL = "https://mechaku-server.zaerodev.my.id/api/grade";

export async function getAllGrades() {
  try {
    const response = await axios.get(`${GRADE_URL}`);

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
}

export async function getGradeById(id) {
  try {
    const response = await axios.get(`${GRADE_URL}/${id}`);

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
}

export async function postGradeData(data) {
  try {
    const response = await axios({
      method: "post",
      url: `${GRADE_URL}`,
      data: data,
      headers: {
        "Content-Type": `multipart/form-data`,
      },
    });

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
}

export async function putGradeData(id, data) {
  try {
    const response = await axios({
      method: "put",
      url: `${GRADE_URL}/${id}`,
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

export async function deleteGradeData(id) {
  try {
    const response = await axios.delete(`${GRADE_URL}/${id}`);

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
}
