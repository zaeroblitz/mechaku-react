import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

import { getCartItemByUser } from "apis/cart";
import CartTable from "components/user/CartPage/CartTable";
import CartTotal from "components/user/CartPage/CartTotal";
import Breadcrumb from "components/user/CartPage/Breadcrumb";
import "./styles.scss";

export default function CartPage() {
  const [tax, setTax] = useState(0);
  const [user, setUser] = useState({});
  const [total, setTotal] = useState(0);
  const [token, setToken] = useState("");
  const [items, setItems] = useState([]);
  const [priceItems, setPriceItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  const navigate = useNavigate();
  const tokenBase64 = Cookies.get("token");

  // Convert Token
  useEffect(() => {
    if (tokenBase64) {
      const convertToken = atob(tokenBase64);
      const jwtToken = jwtDecode(convertToken);

      setToken(convertToken);
      setUser(jwtToken.user);
    }
  }, [tokenBase64]);

  // Get cart items data by user
  const getCartItemsData = useCallback(async () => {
    if (token && user) {
      const response = await getCartItemByUser(token, user.id);

      setItems(response.data.items);
    }
  }, [token, user]);

  useEffect(() => {
    getCartItemsData();
  }, [getCartItemsData]);

  // Callback function to check if checkbox is checked
  const onCheckItemChange = (itemId, itemPrice) => {
    if (checkedItems.includes(itemId)) {
      const index = checkedItems.indexOf(itemId);
      const selectedItems = [
        ...checkedItems.slice(0, index),
        ...checkedItems.slice(index + 1),
      ];
      const prices = [
        ...priceItems.slice(0, index),
        ...priceItems.slice(index + 1),
      ];

      setCheckedItems(selectedItems);
      setPriceItems(prices);
    } else {
      setCheckedItems([...checkedItems, itemId]);
      setPriceItems([...priceItems, itemPrice]);
    }
  };

  /* Callback function to check 
  if amount of item is changed (increment or decrement) */
  const onPriceItemChange = (itemId, value) => {
    if (checkedItems.includes(itemId)) {
      const index = checkedItems.indexOf(itemId);
      const prices = [
        ...priceItems.slice(0, index),
        value,
        ...priceItems.slice(index + 1),
      ];
      setPriceItems(prices);
    }
  };

  // If price items change
  useEffect(() => {
    let totalPrice = 0;
    if (priceItems) {
      priceItems.forEach((price) => {
        totalPrice += parseInt(price);
      });

      setTotal(totalPrice);
      setTax(0.1 * totalPrice);
    }
  }, [priceItems]);

  const handleCheckoutButtonClick = (e) => {
    e.preventDefault();

    navigate("/checkout");
  };

  return (
    <>
      <Helmet>
        <title>Mechaku | Cart</title>
      </Helmet>
      <Breadcrumb />
      <div className="cart-container my-5">
        <div className="container-fluid">
          <CartTable
            token={token}
            cartItems={items}
            userId={user.id}
            onCheckItemChange={onCheckItemChange}
            onPriceItemChange={onPriceItemChange}
          />
          <div className="d-flex flex-row-reverse align-items-center mt-5">
            <div className="d-flex flex-column align-items-end">
              <CartTotal total={total} tax={tax} />
              <button
                className="btn btn-checkout mt-4"
                onClick={handleCheckoutButtonClick}
                disabled={checkedItems.length === 0}
              >
                Continue to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
