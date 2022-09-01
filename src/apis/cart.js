import axios from "axios";

const CART_API = "http://localhost:8000/api/carts";

export async function addCartItem(token, data) {
  try {
    const response = await axios({
      method: "post",
      url: CART_API,
      data: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
}

export async function getCartItemByUser(token, userId) {
  try {
    const response = await axios({
      method: "get",
      url: `${CART_API}/user/${userId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
}

export async function removeCartItem(token, userId, data) {
  try {
    const response = await axios({
      method: "put",
      url: `${CART_API}/${userId}`,
      data: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
}
