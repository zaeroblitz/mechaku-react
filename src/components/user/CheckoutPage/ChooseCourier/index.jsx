import { getAllCouriersData } from "apis/couriers";
import { useCallback, useEffect, useState } from "react";
import { BsCheck2 } from "react-icons/bs";
import DHLLogo from "assets/icons/dhl.png";
import FedExLogo from "assets/icons/fed-ex.png";
import "./styles.scss";

export default function ChooseCourier() {
  const [couriers, setCouriers] = useState([]);

  const getCouriersData = useCallback(async () => {
    const response = await getAllCouriersData();
    setCouriers(response.data);
  }, []);

  useEffect(() => {
    getCouriersData();
  }, [getCouriersData]);

  return (
    <section className="choose-courier col-md-4">
      <h2 className="title">Choose Courier</h2>
      <div className="card">
        <div className="radio-btn-group d-flex justify-content-evenly">
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
    </section>
  );
}
