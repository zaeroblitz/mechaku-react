import { Helmet } from "react-helmet";
import CartItems from "components/user/CheckoutPage/CartItems";
import Breadcrumb from "components/user/CheckoutPage/Breadcrumb";
import CheckoutAddress from "components/user/CheckoutPage/Address";
import ChooseCourier from "components/user/CheckoutPage/ChooseCourier";
import ChoosePayment from "components/user/CheckoutPage/ChoosePayment";
import CompleteCheckoutButton from "components/user/CheckoutPage/CompleteCheckoutButton";

export default function CheckoutPage() {
  return (
    <>
      <Helmet>
        <title>Mechaku | Checkout</title>
      </Helmet>
      <Breadcrumb />
      <div className="container-fluid">
        <CheckoutAddress />
        <CartItems />
        <ChooseCourier />
        <ChoosePayment />
        <CompleteCheckoutButton />
      </div>
    </>
  );
}
