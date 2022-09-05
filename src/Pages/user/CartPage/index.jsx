import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { Helmet } from "react-helmet";
import { useCallback, useEffect, useState } from "react";

import { getCartItemByUser } from "apis/cart";
import CartTable from "components/user/CartPage/CartTable";
import CartTotal from "components/user/CartPage/CartTotal";
import Breadcrumb from "components/user/CartPage/Breadcrumb";

export default function CartPage() {
  const [tax, setTax] = useState(0);
  const [user, setUser] = useState({});
  const [total, setTotal] = useState(0);
  const [token, setToken] = useState("");
  const [items, setItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [priceItems, setPriceItems] = useState([]);
  const tokenBase64 = Cookies.get("token");

  const onCheckItemChange = (itemId, itemPrice) => {
    if (checkedItems.includes(itemId)) {
      const index = checkedItems.indexOf(itemId);
      const items = [
        ...checkedItems.slice(0, index),
        ...checkedItems.slice(index + 1),
      ];
      const prices = [
        ...priceItems.slice(0, index),
        ...priceItems.slice(index + 1),
      ];

      setCheckedItems(items);
      setPriceItems(prices);
    } else {
      setCheckedItems([...checkedItems, itemId]);
      setPriceItems([...priceItems, itemPrice]);
    }
  };

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

  useEffect(() => {
    if (tokenBase64) {
      const convertToken = atob(tokenBase64);
      const jwtToken = jwtDecode(convertToken);

      setToken(convertToken);
      setUser(jwtToken.user);
    }
  }, [tokenBase64]);

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

  const getCartItemsData = useCallback(async () => {
    if (token && user) {
      const response = await getCartItemByUser(token, user.id);

      setItems(response.data.items);
    }
  }, [token, user]);

  useEffect(() => {
    getCartItemsData();
  }, [getCartItemsData]);

  return (
    <>
      <Helmet>
        <title>Mechaku | Cart</title>
      </Helmet>
      <Breadcrumb />
      <div className="cart-container my-5">
        <div className="d-flex flex-column container-fluid">
          <CartTable
            token={token}
            cartItems={items}
            userId={user.id}
            onCheckItemChange={onCheckItemChange}
            onPriceItemChange={onPriceItemChange}
          />
          <CartTotal total={total} tax={tax} />
        </div>
      </div>
    </>
  );
}
