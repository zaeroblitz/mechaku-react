import React from "react";

export default function StatItem({ title, label }) {
  return (
    <div className="col stat-content">
      <h5 className="stat-title">{title}</h5>
      <p className="stat-label">{label}</p>
    </div>
  );
}
