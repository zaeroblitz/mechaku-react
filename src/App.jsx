import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserCarts } from "features/cart/cartSlice";

import Footer from "components/user/Footer";
import Navbar from "components/user/Navbar";
import "./App.css";

export default function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (Object.keys(auth.user).length) {
      const data = {
        token: auth.token,
        userId: auth.user.id,
      };
      dispatch(fetchUserCarts(data));
    }
  }, [dispatch, auth]);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
