import React from "react";
import Buttons from "./Buttons";
import "./styles.css";

export default function DetailContent() {
  return (
    <div className="col-md-6">
      <div className="detail-content">
        <div className="detail-content-title">
          <h2>UNICORN GUNDAM PERFECTIBILITY</h2>
        </div>
        <div className="detail-content-price">
          <p>IDR 12.000.000</p>
        </div>
        <div className="detail-content-category">
          <p>Category: Gundam</p>
        </div>
        <div className="detail-content-grade">
          <p>Grade: Real Grade (RG)</p>
        </div>
        <div className="detail-content-about">
          <p className="detail-content-about-title">About the product</p>
          <p className="detail-content-about-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A et illo
            neque, obcaecati adipisci tempore facilis voluptas quasi dicta.
            Exercitationem nostrum eveniet odio. Ipsam, ut voluptatum sed
            reiciendis accusantium error. <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
            laboriosam veniam labore similique aspernatur voluptates, officiis
            nihil placeat porro exercitationem soluta dolor, id, corrupti
            inventore libero nobis nam. Dolorum, suscipit?
          </p>
        </div>
        <Buttons />
      </div>
    </div>
  );
}
