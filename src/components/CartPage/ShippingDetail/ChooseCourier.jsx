import React from "react";
import { BsCheck2 } from "react-icons/bs";
import DHLLogo from "../../../assets/icons/dhl.png";
import FedExLogo from "../../../assets/icons/fed-ex.png";

export default function ChooseCourier() {
  return (
    <div className="input-button">
      <p className="input-button-label">Choose Courier</p>
      <div className="input-button-group d-flex justify-content-evenly">
        <div className="radio-btn">
          <input type="radio" name="courier" id="fed_ex" />
          <label className="radio-card" htmlFor="fed_ex">
            <span>
              <BsCheck2 className="check-icon" />
              <img src={FedExLogo} alt="" />
            </span>
          </label>
        </div>

        <div className="radio-btn">
          <input type="radio" name="courier" id="dhl" />
          <label className="radio-card" htmlFor="dhl">
            <span>
              <BsCheck2 className="check-icon" />
              <img src={DHLLogo} alt="" />
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
