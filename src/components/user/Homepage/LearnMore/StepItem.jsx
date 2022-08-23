import React from "react";

export default function StepItem({ icon, title, desc1, desc2 }) {
  return (
    <div className="col-12 col-md-4">
      <div className="card step-card border-0">
        <img className="rounded-circle step-item-icon" src={icon} alt="icon" />
        <h5 className="step-item-title">{title}</h5>
        <p className="step-item-description">
          {desc1}
          <br />
          {desc2}
        </p>
      </div>
    </div>
  );
}
