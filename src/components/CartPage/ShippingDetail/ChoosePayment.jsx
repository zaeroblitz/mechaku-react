import React from "react";
import { BsCheck2 } from "react-icons/bs";
import AmericanExpressLogo from "../../../assets/icons/american-express.png";
import BitcoinLogo from "../../../assets/icons/btc.png";
import MasterCardLogo from "../../../assets/icons/mastercard.png";
import MidtransLogo from "../../../assets/icons/midtrans.png";

export default function ChoosePayment() {
  return (
    <div className="input-button choose-payment">
      <p className="input-button-label">Choose Payment</p>
      <div className="input-button-group d-flex justify-content-evenly flex-wrap">
        <div className="radio-btn">
          <input type="radio" name="payment" id="midtrans" />
          <label className="radio-card" htmlFor="midtrans">
            <span>
              <BsCheck2 className="check-icon" />
              <img src={MidtransLogo} alt="" />
            </span>
          </label>
        </div>

        <div className="radio-btn">
          <input type="radio" name="payment" id="master_card" />
          <label className="radio-card" htmlFor="master_card">
            <span>
              <BsCheck2 className="check-icon" />
              <img src={MasterCardLogo} alt="" />
            </span>
          </label>
        </div>

        <div className="radio-btn btn-payment">
          <input type="radio" name="payment" id="btc" />
          <label className="radio-card" htmlFor="btc">
            <span>
              <BsCheck2 className="check-icon" />
              <img src={BitcoinLogo} alt="" />
            </span>
          </label>
        </div>

        <div className="radio-btn btn-payment">
          <input type="radio" name="payment" id="american_express" />
          <label className="radio-card" htmlFor="american_express">
            <span>
              <BsCheck2 className="check-icon" />
              <img src={AmericanExpressLogo} alt="" />
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
