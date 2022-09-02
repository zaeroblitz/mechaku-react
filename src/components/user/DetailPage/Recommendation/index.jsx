import RecommendationItem from "./RecommendationItem";
import ThumbnailSample1 from "assets/images/featured-1.jpg";
import ThumbnailSample2 from "assets/images/featured-2.jpg";
import ThumbnailSample3 from "assets/images/featured-3.jpg";
import ThumbnailSample4 from "assets/images/featured-4.jpg";
import "./styles.scss";

export default function Recommendation() {
  return (
    <section className="recommendation">
      <h4 className="recommendation-title">Our Recommendations</h4>
      <div className="recommendation-list row row-cols-4 justify-content-evenly">
        <RecommendationItem
          image={ThumbnailSample1}
          name="Astray Red Frame Kai"
          price="Rp. 1.275.000"
        />
        <RecommendationItem
          image={ThumbnailSample2}
          name="Zoids Berserk Fuhrer"
          price="Rp. 1.275.000"
        />
        <RecommendationItem
          image={ThumbnailSample3}
          name="Wargreymon"
          price="Rp. 1.275.000"
        />
        <RecommendationItem
          image={ThumbnailSample4}
          name="Victory Assault Buster"
          price="Rp. 1.275.000"
        />
      </div>
    </section>
  );
}
