import { addAddress } from "features/checkout/checkoutSlice";
import { useDispatch } from "react-redux";
import "./styles.scss";

export default function CheckoutAddress() {
  const dispatch = useDispatch();

  const handleAddressChange = (e) => {
    dispatch(addAddress(e.target.value));
  };

  return (
    <section className="checkout-address">
      <h2 className="title">Shipping Address</h2>
      <div className="card">
        <form>
          {/* Address */}
          <div className="form-group">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <textarea
              cols="30"
              rows="3"
              id="address"
              placeholder="Enter your address..."
              className="form-control"
              onChange={handleAddressChange}
              required
            ></textarea>
          </div>

          {/* Province & City */}
          {/* <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="Province" className="form-label">
                Province
              </label>
              <input
                type="text"
                id="province"
                placeholder="Enter province..."
                className="form-control"
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <input
                type="text"
                id="city"
                placeholder="Enter city..."
                className="form-control"
                required
              />
            </div>
          </div> */}

          {/* Postal Code & Phone Number */}
          {/* <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="postal_code" className="form-label">
                Postal Code
              </label>
              <input
                type="number"
                id="postal_code"
                placeholder="Enter postal code..."
                className="form-control"
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="phone_number" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone_number"
                placeholder="Enter phone number..."
                className="form-control"
                required
              />
            </div>
          </div> */}
        </form>
      </div>
    </section>
  );
}
