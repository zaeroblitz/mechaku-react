import Swal from "sweetalert2";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NumberFormat from "react-number-format";
import { BiMinus, BiPlus } from "react-icons/bi";

import { addCartItem } from "apis/cart";
import "./styles.scss";

export default function DetailContent({
  id,
  name,
  price,
  category,
  grade,
  brand,
  stock,
  description,
}) {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState({});
  const [value, setValue] = useState(1);
  const navigate = useNavigate();

  const handleMinIconClick = () => {
    if (value !== 1) {
      setValue(value - 1);
    }
  };

  const handlePlusIconClick = () => {
    if (value < stock) {
      setValue(value + 1);
    }
  };

  const handleAddCartButton = async (e) => {
    e.preventDefault();

    if (token) {
      const data = {
        user: userId,
        product: id,
        amount: value,
      };

      const response = await addCartItem(token, data);

      if (response.status === "success") {
        Swal.fire({
          title: "Success",
          text: "Success add to cart",
          icon: "success",
          confirmButtonText: "OK!",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate(0);
          }
        });
      }
    } else {
      Swal.fire({
        title: "Failed!",
        text: "Please login first to checkout",
        icon: "warning",
        confirmButtonText: "OK!",
      });
    }
  };

  useEffect(() => {
    const tokenBase64 = Cookies.get("token");

    if (tokenBase64) {
      const convertToken = atob(tokenBase64);
      const jwtToken = jwtDecode(convertToken);
      setToken(convertToken);
      setUserId(jwtToken.user.id);
    }
  }, []);

  return (
    <section className="product-detail-card col-md-6">
      <h2 className="product-name">{name}</h2>
      <NumberFormat
        displayType="text"
        prefix="Rp. "
        decimalSeparator=","
        thousandSeparator="."
        value={price}
        className="product-price"
      />
      <p className="product-detail">Category: {category}</p>
      <p className="product-detail">Grade: {grade}</p>
      <p className="product-detail">Brand: {brand}</p>
      <p className="product-detail">Stock: {stock}</p>
      <div className="product-description">
        <p className="title">About the product</p>
        <p className="description">{description}</p>
      </div>
      <div className="product-stock d-flex align-items-center">
        <div className="stock-buttons d-flex align-items-center">
          <BiMinus className="icon" onClick={handleMinIconClick} />
          <p className="value">{value}</p>
          <BiPlus className="icon" onClick={handlePlusIconClick} />
        </div>
        <div className="stock-label">{stock} left</div>
      </div>
      <div className="product-buttons d-flex justify-content-center">
        <button className="btn btn-cart" onClick={handleAddCartButton}>
          Add to Cart
        </button>
        <button className="btn btn-buy" href="/cart">
          Buy Now
        </button>
      </div>
    </section>
  );
}
