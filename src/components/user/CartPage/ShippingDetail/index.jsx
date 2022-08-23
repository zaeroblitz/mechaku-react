import React from "react";
import ButtonCheckout from "./ButtonCheckout";
import ChooseCourier from "./ChooseCourier";
import ChoosePayment from "./ChoosePayment";
import InputText from "./InputText";
import "./styles.css";

export default function ShippingDetail() {
  return (
    <div className="shipping-detail">
      <div className="shipping-detail-title">Shipping Details</div>
      <InputText label="Complete Name" placeholder="Your Name..." type="text" />
      <InputText
        label="Email Address"
        placeholder="Your Email Address..."
        type="email"
      />
      <InputText label="Address" placeholder="Your Address..." type="text" />
      <InputText
        label="Phone Number"
        placeholder="Your Phone Number..."
        type="tel"
      />
      <ChooseCourier />
      <ChoosePayment />
      <ButtonCheckout />
    </div>
  );
}
