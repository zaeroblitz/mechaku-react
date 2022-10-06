import { addCourier } from "features/checkout/checkoutSlice";
import { BsCheck2 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";

export default function ChooseCourier() {
  const dispatch = useDispatch();
  const couriers = useSelector((state) => state.couriers);
  const COURIER_THUMBNAIL_URL =
    "https://mechaku-server.zaerodev.my.id/uploads/couriers";

  const handleRadioChecked = (e) => {
    if (e.target.checked) {
      dispatch(addCourier(e.target.value));
    }
  };

  const showCouriersRadio = () => {
    if (!couriers.loading && !couriers.error && couriers.data.length) {
      const couriersData = couriers.data;
      return couriersData.map((courier) => (
        <div className="radio-btn" key={courier._id}>
          <input
            type="radio"
            name="courier"
            id={courier._id}
            value={courier._id}
            onChange={handleRadioChecked}
          />
          <label className="radio-card" htmlFor={courier._id}>
            <span>
              <BsCheck2 className="check-icon" />
              <img
                src={`${COURIER_THUMBNAIL_URL}/${courier.thumbnail}`}
                alt=""
              />
            </span>
          </label>
        </div>
      ));
    }
  };

  return (
    <section className="choose-courier col-md-4">
      <h2 className="title">Choose Courier</h2>
      <div className="card">
        <div className="radio-btn-group d-flex justify-content-evenly">
          {showCouriersRadio()}
        </div>
      </div>
    </section>
  );
}
