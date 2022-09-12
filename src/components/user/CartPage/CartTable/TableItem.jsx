import Swal from "sweetalert2";
import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import NumberFormat from "react-number-format";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchDecrementCartItem,
  fetchIncrementCartItem,
  fetchRemoveCartItem,
} from "features/cart/cartSlice";
import {
  checkedItemCart,
  uncheckedItemCart,
} from "features/cart/cartTotalSlice";
import {
  addSelectedCart,
  uncheckedSelectedCart,
} from "features/cart/selectedCartSlice";

export default function TableItem({
  itemId,
  thumbnail,
  name,
  category,
  amount,
  price,
  stock,
}) {
  const [value, setValue] = useState(amount);
  const [itemPrice, setItemPrice] = useState(amount * price);
  const dispatch = useDispatch();
  const THUMBNAIL_URL = "http://localhost:8000/uploads/products";
  const auth = useSelector((state) => state.auth);
  const data = {
    token: auth.token,
    itemId: itemId,
  };

  const handleCheckItem = (e) => {
    if (e.target.checked) {
      dispatch(checkedItemCart(parseInt(e.target.value)));
      dispatch(
        addSelectedCart({
          itemId,
          thumbnail,
          name,
          category,
          amount,
          price,
        })
      );
    } else {
      dispatch(uncheckedItemCart(parseFloat(e.target.value)));
      dispatch(uncheckedSelectedCart(itemId));
    }
  };

  const handleMinIconClick = async () => {
    if (value !== 1) {
      setValue(value - 1);
      setItemPrice((value - 1) * price);

      dispatch(fetchDecrementCartItem(data));
    }
  };

  const handlePlusIconClick = async () => {
    if (value < stock) {
      setValue(value + 1);
      setItemPrice((value + 1) * price);

      dispatch(fetchIncrementCartItem(data));
    }
  };

  const handleRemoveItem = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Selected item will be removed from your carts",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4d17e2",
      cancelButtonColor: "#e4345f",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const removeItemData = {
          token: auth.token,
          userId: auth.user.id,
          data: {
            item: itemId,
          },
        };

        dispatch(fetchRemoveCartItem(removeItemData));
      }
    });
  };

  return (
    <tr className="table-item align-items-center">
      <td>
        <input
          type="checkbox"
          name="itemCheck"
          id={itemId}
          value={itemPrice}
          onChange={handleCheckItem}
        />
      </td>
      <td>
        <div className="d-flex align-items-center">
          <img
            src={`${THUMBNAIL_URL}/${thumbnail}`}
            width="90"
            height="90"
            className="product-thumbnail me-3"
            alt=""
          />
          <div>
            <p className="product-name">{name}</p>
            <p className="product-category">{category}</p>
          </div>
        </div>
      </td>
      <td>
        <div className="amount-buttons d-flex align-items-center">
          <div className="icon-container" onClick={handleMinIconClick}>
            <BiMinus className="icon" />
          </div>
          <p className="value">{value}</p>
          <div className="icon-container" onClick={handlePlusIconClick}>
            <BiPlus className="icon" />
          </div>
        </div>
      </td>
      <td>
        <NumberFormat
          displayType="text"
          prefix="Rp."
          decimalSeparator=","
          thousandSeparator="."
          value={itemPrice}
          className="product-price"
        />
      </td>
      <td className="text-center">
        <button className="btn btn-remove" onClick={handleRemoveItem}>
          <FiTrash2 />
        </button>
      </td>
    </tr>
  );
}
