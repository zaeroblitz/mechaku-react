import React from "react";

export default function StepItem({ icon, title, desc1, desc2 }) {
  return (
    <div className="col-12 col-md-4">
      <div className="item border-0">
        <img className="item-icon rounded-circle " src={icon} alt="icon" />
        <h5 className="item-title">{title}</h5>
        <p className="item-description">
          {desc1}
          <br />
          {desc2}
        </p>
      </div>
    </div>
  );
}
