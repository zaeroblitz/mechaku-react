import { addPayment } from "features/checkout/checkoutSlice";
import { BsCheck2 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";

export default function ChoosePayment() {
  const dispatch = useDispatch();
  const payments = useSelector((state) => state.payments);
  const PAYMENT_THUMNAIL_URL =
    "https://mechaku-server.zaerodev.my.id/uploads/payments";

  const handleRadioChecked = (e) => {
    if (e.target.checked) {
      dispatch(addPayment(e.target.value));
    }
  };

  const showPaymentsRadio = () => {
    if (!payments.loading && !payments.error && payments.data.length) {
      const paymentsData = payments.data;
      return paymentsData.map((payment) => (
        <div className="radio-btn" key={payment._id}>
          <input
            type="radio"
            name="payment"
            id={payment._id}
            value={payment._id}
            onChange={handleRadioChecked}
          />
          <label className="radio-card" htmlFor={payment._id}>
            <span>
              <BsCheck2 className="check-icon" />
              <img
                src={`${PAYMENT_THUMNAIL_URL}/${payment.thumbnail}`}
                alt=""
              />
            </span>
          </label>
        </div>
      ));
    }
  };

  return (
    <section className="choose-payment col-md-8">
      <h2 className="title">Choose Payment</h2>
      <div className="card">
        <div className="radio-btn-group d-flex justify-content-evenly">
          {showPaymentsRadio()}
        </div>
      </div>
    </section>
  );
}
