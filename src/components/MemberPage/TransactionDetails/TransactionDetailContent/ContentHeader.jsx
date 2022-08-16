import React from "react";
import SampleThumbnail from "../../../../assets/images/featured-2.jpg";

export default function ContentHeader() {
  return (
    <div className="content-header d-flex align-items-center justify-content-between">
      <div className="content-header-product d-flex align-items-center">
        <img
          className="product-thumbnail"
          src={SampleThumbnail}
          width="120"
          height="120"
          alt=""
        />
        <div>
          <h4 className="product-name">Zoids Berserk Fuhrer</h4>
          <p className="product-category">Category: Zoids</p>
          <p className="product-grade">Grade: Perfect Grade (PG)</p>
        </div>
      </div>
      <div className="content-header-status-pending">Pending</div>
    </div>
  );
}
