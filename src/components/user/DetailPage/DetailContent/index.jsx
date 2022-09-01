import { addCartItem } from "apis/cart";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiMinus, BiPlus } from "react-icons/bi";
import NumberFormat from "react-number-format";
import Swal from "sweetalert2";
import "./styles.css";

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

  useEffect(() => {
    const tokenBase64 = Cookies.get("token");

    if (tokenBase64) {
      const convertToken = atob(tokenBase64);
      const jwtToken = jwtDecode(convertToken);
      setToken(convertToken);
      setUserId(jwtToken.user.id);
    }
  }, []);

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

  return (
    <div className="col-md-6">
      <div className="detail-content">
        <div className="detail-content-title">
          <h2>{name}</h2>
        </div>
        <div className="detail-content-price">
          <p>
            <NumberFormat
              displayType="text"
              prefix="Rp. "
              decimalSeparator=","
              thousandSeparator="."
              value={price}
            />
          </p>
        </div>
        <div className="detail-content-category">
          <p>Category: {category}</p>
        </div>
        <div className="detail-content-grade">
          <p>Grade: {grade}</p>
        </div>
        <div className="detail-content-grade">
          <p>Brand: {brand}</p>
        </div>
        <div className="detail-content-grade">
          <p>Stock: {stock}</p>
        </div>
        <div className="detail-content-about">
          <p className="detail-content-about-title">About the product</p>
          <p className="detail-content-about-description">{description}</p>
        </div>
        <div className="detail-content-quantity d-flex align-items-center">
          <div className="quantity-action d-flex align-items-center">
            <BiMinus className="icon" onClick={handleMinIconClick} />
            <p className="value">{value}</p>
            <BiPlus className="icon" onClick={handlePlusIconClick} />
          </div>
          <div className="quantity-label">{stock} left</div>
        </div>
        <div className="detail-buttons-container">
          <div className="d-flex justify-content-center">
            <button className="btn btn-cart" onClick={handleAddCartButton}>
              Add to Cart
            </button>
            <button className="btn btn-buy" href="/cart">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
