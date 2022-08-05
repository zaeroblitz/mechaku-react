import React from "react";
import featured_1 from "../../../assets/images/featured-1.jpg";
import featured_2 from "../../../assets/images/featured-2.jpg";
import featured_3 from "../../../assets/images/featured-3.jpg";
import featured_4 from "../../../assets/images/featured-4.jpg";
import featured_5 from "../../../assets/images/featured-5.jpg";
import FeaturedItem from "./FeaturedItem";
import "./styles.css";

export default function Featured() {
  return (
    <section className="featured">
      <div className="featured-title">
        <h2>
          Our Featured
          <br />
          Mecha This Year
        </h2>
      </div>
      <div className="featured-list">
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-5 g-3 g-md-4">
          <FeaturedItem
            id={1}
            thumbnail={featured_1}
            title="Astray Red Frame Kai"
            category="Gundam"
          />
          <FeaturedItem
            id={2}
            thumbnail={featured_2}
            title="Zoids Berserk Fuhrer"
            category="Zoids"
          />
          <FeaturedItem
            id={3}
            thumbnail={featured_3}
            title="Wargreymon Amplified"
            category="Digimon"
          />
          <FeaturedItem
            id={4}
            thumbnail={featured_4}
            title="Victory Two Assault Buster"
            category="Gundam"
          />
          <FeaturedItem
            id={5}
            thumbnail={featured_5}
            title="Epyon Ew"
            category="Gundam"
          />
        </div>
      </div>
    </section>
  );
}
