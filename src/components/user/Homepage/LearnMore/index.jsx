import React from "react";
import StepItem from "./StepItem";
import icon_1 from "assets/icons/icon.png";
import icon_2 from "assets/icons/icon-1.png";
import icon_3 from "assets/icons/icon-2.png";
import "./styles.css";

export default function LearnMore() {
  return (
    <section className="learn-more" id="learn-more">
      <div className="learn-more-title">
        <h2 className="text-center">
          It's Really That
          <br />
          Easy to Get Your Mecha
        </h2>
      </div>
      <div className="learn-more-step row gap-lg-0 gap-4">
        <StepItem
          key="1"
          icon={icon_1}
          title="1. Start"
          desc1="Pilih barang"
          desc2="yang ingin kamu beli"
        />
        <StepItem
          key="2"
          icon={icon_2}
          title="2. Fill Up"
          desc1="Bayar sesuai dengan"
          desc2="nominal yang sudah tersedia"
        />
        <StepItem
          key="3"
          icon={icon_3}
          title="3. Be a Winner"
          desc1="Mecha kesukaanmu"
          desc2="akan sampai dengan cepat"
        />
      </div>
    </section>
  );
}
