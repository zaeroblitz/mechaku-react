import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import CartTable from "components/user/CartPage/CartTable";
import CartTotal from "components/user/CartPage/CartTotal";
import Breadcrumb from "components/user/CartPage/Breadcrumb";
import "./styles.scss";
export default function CartPage() {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const cartTotal = useSelector((state) => state.cartTotal);

  useEffect(() => {
    if (!auth.isLogin && !auth.token) {
      navigate("/");
    }
  }, [auth, navigate]);

  const handleCheckoutButtonClick = (e) => {
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
          <CartTable />
          <div className="d-flex flex-row-reverse align-items-center mt-5">
            <div className="d-flex flex-column align-items-end">
              <CartTotal />
              <button
                className="btn btn-checkout mt-4"
                onClick={handleCheckoutButtonClick}
                disabled={cartTotal.grandTotal === 0}
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
