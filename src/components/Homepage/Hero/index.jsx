import React from "react";
import hero from "../../../assets/images/hero.png";
import "./styles.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="row justify-lg-content-center align-items-center">
        <div className="hero-content col-12 col-lg-6">
          <div className="hero-content-title">
            <h2>Find Your Favorite Mecha In Easy Way</h2>
          </div>
          <div className="hero-content-subtitle">
            <p>
              Kami menyediakan jutaan cara untuk membantu mendapatkan koleksi
              kesukaanmu
            </p>
          </div>
          <div className="hero-content-buttons">
            <div className="row">
              <a
                className="btn btn-get-started col-10 col-md-5 py-3"
                href="#get-started"
              >
                Get Started
              </a>
              <a
                className="btn btn-learn-more col-8 col-md-4 py-3 mt-3 mt-md-0"
                href="#learn-more"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="hero-illustration col-12 col-lg-6 d-lg-block d-none">
          <img src={hero} alt="illustration" className="img-fluid" />
        </div>
      </div>
    </section>
  );
}
