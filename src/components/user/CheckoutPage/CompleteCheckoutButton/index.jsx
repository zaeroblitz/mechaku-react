import { useDispatch, useSelector } from "react-redux";
import { createTransactionData } from "features/checkout/createTransactionSlice";
import "./styles.scss";

export default function CompleteCheckoutButton() {
  const dispatch = useDispatch();
  const { user, address, cartItems, products, courier, payment, value, tax } =
    useSelector((state) => state.checkout);

  const handleButtonClick = () => {
    dispatch(
      createTransactionData({
        user,
        cartItems,
        address,
        products,
        courier,
        payment,
        value,
        tax,
      })
    );
  };

  return (
    <>
      {user && address && products && courier && payment && value && tax ? (
        <div className="d-flex mt-4">
          <button
            className="btn btn-complete-checkout"
            onClick={handleButtonClick}
          >
            Complete Checkout
          </button>
        </div>
      ) : (
        <div className="mt-5 mb-5"></div>
      )}
    </>
  );
}
