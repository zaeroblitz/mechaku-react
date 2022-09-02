import React from "react";
import StatItem from "./StatItem";
import "./styles.scss";

export default function Stats() {
  return (
    <section className="stats">
      <div className="d-flex flex-column flex-md-row justify-content-center text-center">
        <StatItem title="290M+" label="Consumer Transaction" />
        <StatItem title="120" label="Mecha Available" />
        <StatItem title="6996" label="Happy Consumer" />
        <StatItem title="4.7" label="Rating Worldwide" />
      </div>
    </section>
  );
}
