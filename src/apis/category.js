import axios from "axios";

const CATEGORY_URL = "http://localhost:8000/api/category";

export async function getAllCategories() {
  try {
    const response = await axios({
      method: "get",
      url: `${CATEGORY_URL}`,
    });

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
}

export async function getCategoryById(id) {
  try {
    const response = await axios({
      method: "get",
      url: `${CATEGORY_URL}/${id}`,
    });

    return response.data;
  } catch (err) {}
}

export async function postCategoryData(data) {
  try {
    const response = await axios({
      method: "post",
      url: `${CATEGORY_URL}`,
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

export async function putCategoryData(id, data) {
  try {
    const response = await axios({
      method: "put",
      url: `${CATEGORY_URL}/${id}`,
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

export async function deleteCategoryData(id) {
  try {
    const response = await axios({
      method: "delete",
      url: `${CATEGORY_URL}/${id}`,
    });

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
}
