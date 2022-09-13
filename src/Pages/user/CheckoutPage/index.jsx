import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCouriersData } from "features/courier/courierSlice";
import { fetchPaymentsData } from "features/payment/paymentSlice";
import { cleanedUpItemCart } from "features/cart/cartTotalSlice";
import { cleanSelectedCart } from "features/cart/selectedCartSlice";
import CartItems from "components/user/CheckoutPage/CartItems";
import Breadcrumb from "components/user/CheckoutPage/Breadcrumb";
import CheckoutAddress from "components/user/CheckoutPage/Address";
import ChooseCourier from "components/user/CheckoutPage/ChooseCourier";
import ChoosePayment from "components/user/CheckoutPage/ChoosePayment";
import CheckoutGrandTotal from "components/user/CheckoutPage/GrandTotal";
import CompleteCheckoutButton from "components/user/CheckoutPage/CompleteCheckoutButton";
import {
  addCartItems,
  addProducts,
  addTax,
  addUser,
  addValue,
} from "features/checkout/checkoutSlice";
import Swal from "sweetalert2";

export default function CheckoutPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const cartTotal = useSelector((state) => state.cartTotal);
  const selectedCarts = useSelector((state) => state.selectedCart.data);
  const createTransaction = useSelector((state) => state.createTransaction);

  useEffect(() => {
    dispatch(fetchCouriersData());
    dispatch(fetchPaymentsData());

    return () => {
      dispatch(cleanSelectedCart());
      dispatch(cleanedUpItemCart());
    };
  }, [dispatch, selectedCarts, cartTotal]);

  useEffect(() => {
    if (auth.isLogin && !auth.isLoading) {
      dispatch(addUser(auth.user.id));
    }
  }, [auth, dispatch]);

  useEffect(() => {
    if (selectedCarts.length) {
      selectedCarts.map((item) => dispatch(addCartItems(item.itemId)));
      selectedCarts.map((item) => dispatch(addProducts(item.productId)));
    }
  }, [selectedCarts, dispatch]);

  useEffect(() => {
    if (cartTotal) {
      dispatch(addValue(cartTotal.total));
      dispatch(addTax(cartTotal.tax));
    }
  }, [cartTotal, dispatch]);

  const showSweetAlert = () => {
    // Loading
    if (createTransaction.loading && !createTransaction.error) {
      Swal.fire({
        title: "Loading...",
        text: "Please wait a moment",
        allowEscapeKey: false,
        allowOutsideClick: false,
        showConfirmButton: false,
      });
    }

    // Success
    if (
      !createTransaction.loading &&
      !createTransaction.error &&
      createTransaction.data.length !== 0
    ) {
      Swal.fire({
        title: "Success!",
        text: "Successfully made a createTransaction",
        icon: "success",
        allowEscapeKey: false,
        allowOutsideClick: false,
        confirmButtonText: "OK!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/success");
        }
      });
    }

    // Error
    if (!createTransaction.loading && createTransaction.error) {
      Swal.fire({
        title: "Error",
        text: "Something went wrong",
        icon: "error",
        confirmButtonText: "OK!",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Mechaku | Checkout</title>
      </Helmet>
      <Breadcrumb />
      <div className="container-fluid">
        {showSweetAlert()}
        <CheckoutAddress />
        <CartItems />
        <ChooseCourier />
        <ChoosePayment />
        <CheckoutGrandTotal />
        <CompleteCheckoutButton />
      </div>
    </>
  );
}
