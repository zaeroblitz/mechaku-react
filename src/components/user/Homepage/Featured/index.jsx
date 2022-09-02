import React, { useCallback, useState, useEffect } from "react";
import FeaturedItem from "./FeaturedItem";
import { getAllProducts } from "apis/products";
import "./styles.scss";

export default function Featured() {
  const [featuredMechas, setFeaturedMechas] = useState([]);
  const THUMBNAIL_URL = "http://localhost:8000/uploads/products";

  const getFeaturedMecha = useCallback(async () => {
    const response = await getAllProducts();

    setFeaturedMechas(response.data);
  }, []);

  useEffect(() => {
    (async () => {
      getFeaturedMecha();
    })();
  }, [getFeaturedMecha]);

  const renderedFeaturedItems = () => {
    if (featuredMechas.length)
      return featuredMechas.map((mecha) => (
        <FeaturedItem
          key={mecha._id}
          id={mecha._id}
          thumbnail={`${THUMBNAIL_URL}/${mecha.details.images[0]}`}
          title={mecha.name}
          category={mecha.category.name}
        />
      ));
  };

  return (
    <section className="featured" id="featured">
      <h2 className="title">
        Our Featured
        <br />
        Mecha This Year
      </h2>
      <div className="list">
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-5 g-3 g-md-4">
          {featuredMechas && renderedFeaturedItems()}
        </div>
      </div>
    </section>
  );
}
