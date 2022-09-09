import Swal from "sweetalert2";
import { useState } from "react";
import NumberFormat from "react-number-format";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddCartItem } from "features/cart/cartSlice";
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
  const [value, setValue] = useState(1);
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

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

  const handleAddCartButton = async () => {
    const cartItemData = {
      token: auth.token,
      data: { user: auth.user.id, product: id, amount: value },
    };

    dispatch(fetchAddCartItem(cartItemData));

    Swal.fire({
      title: "Success!",
      text: "Successfully added item to cart!",
      icon: "success",
    });
  };

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
