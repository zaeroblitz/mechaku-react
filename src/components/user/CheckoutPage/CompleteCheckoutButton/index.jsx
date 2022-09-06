import { useNavigate } from "react-router-dom";
import "./styles.scss";

export default function CompleteCheckoutButton() {
  const navigate = useNavigate();

  const handleButtonClick = (e) => {
    e.preventDefault();

    navigate("/success");
  };

  return (
    <div className="d-flex flex-row-reverse">
      <button className="btn btn-complete-checkout" onClick={handleButtonClick}>
        Complete Checkout
      </button>
    </div>
  );
}
