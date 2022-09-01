import React, { useCallback, useEffect, useState } from "react";
import Breadcrumb from "components/user/CartPage/Breadcrumb";
import CartTable from "components/user/CartPage/CartTable";
import CartTotal from "components/user/CartPage/CartTable/CartTotal";
import ShippingDetail from "components/user/CartPage/ShippingDetail";
import Footer from "components/user/Footer";
import Navbar from "components/user/Navbar";
import "./styles.css";
import { getCartItemByUser } from "apis/cart";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

export default function CartPage() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [tax, setTax] = useState(0);

  const getCartItemsData = useCallback(async () => {
    if (token && user) {
      const response = await getCartItemByUser(token, user.id);

      setItems(response.data.items);
    }
  }, [token, user]);

  useEffect(() => {
    (async () => {
      getCartItemsData();
    })();
  }, [getCartItemsData]);

  useEffect(() => {
    document.title = "Mechaku | Cart";
    const tokenBase64 = Cookies.get("token");
    let totalPrice = 0;

    if (tokenBase64) {
      const convertToken = atob(tokenBase64);
      const jwtToken = jwtDecode(convertToken);

      setToken(convertToken);
      setUser(jwtToken.user);

      if (items) {
        items.map((item) => {
          return (totalPrice += item.amount * item.product.details.price);
        });
      }

      setTotal(totalPrice);
      setTax(0.1 * totalPrice);
    }
  }, [items]);

  return (
    <>
      <Navbar />
      <Breadcrumb />
      <main className="cart-container">
        <div className="d-flex flex-column container-fluid">
          <CartTable token={token} cartItems={items} userId={user.id} />
          <CartTotal total={total} tax={tax} />
        </div>
      </main>
      <Footer />
    </>
  );
}
