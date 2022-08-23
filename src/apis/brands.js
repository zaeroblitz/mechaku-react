import axios from "axios";

export async function createBrand(data) {
  try {
    const response = await axios({
      method: "post",
      url: "http://localhost:8000/api/brand",
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

export async function getBrands() {
  try {
    const response = await axios.get("http://localhost:8000/api/brand");

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
}

export async function updateBrand(id, data) {
  try {
    const response = await axios({
      method: "put",
      url: `http://localhost:8000/api/brand/${id}`,
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

export async function deleteBrand(id) {
  try {
    const response = await axios({
      method: "delete",
      url: `http://localhost:8000/api/brand/${id}`,
    });

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
}
