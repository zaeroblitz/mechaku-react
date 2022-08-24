import axios from "axios";

const BRAND_URL = "http://localhost:8000/api/brand";

export async function createBrand(data) {
  try {
    const response = await axios({
      method: "post",
      url: `${BRAND_URL}`,
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
    const response = await axios.get(`${BRAND_URL}`);

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
}

export async function updateBrand(id, data) {
  try {
    const response = await axios({
      method: "put",
      url: `${BRAND_URL}/${id}`,
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
      url: `${BRAND_URL}/${id}`,
    });

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
}
