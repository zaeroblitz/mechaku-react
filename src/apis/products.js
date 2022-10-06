import axios from "axios";

const PRODUCT_URL = "https://mechaku-server.zaerodev.my.id/api/product";

export async function getAllProducts() {
  try {
    const response = await axios.get(PRODUCT_URL);

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
}

export async function getProductById(id) {
  try {
    const response = await axios.get(`${PRODUCT_URL}/${id}`);

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
}

export async function postProductData(data) {
  try {
    const response = await axios({
      method: "post",
      url: PRODUCT_URL,
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

export async function putProductData(id, data) {
  try {
    const response = await axios({
      method: "put",
      url: `${PRODUCT_URL}/${id}`,
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

export async function deleteProductData(id) {
  try {
    const response = await axios.delete(`${PRODUCT_URL}/${id}`);

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
}
