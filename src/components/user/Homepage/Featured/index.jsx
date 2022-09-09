import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeaturedProducts } from "features/product/featuredProductSlice";

import FeaturedItem from "./FeaturedItem";
import "./styles.scss";

export default function Featured() {
  const dispatch = useDispatch();
  const featuredProducts = useSelector((state) => state.featuredProducts);
  const THUMBNAIL_URL = "http://localhost:8000/uploads/products";

  useEffect(() => {
    dispatch(fetchFeaturedProducts());
  }, [dispatch]);

  const renderedFeaturedItems = () => {
    if (!featuredProducts.loading && featuredProducts.products.length) {
      const featuredMechas = featuredProducts.products;
      return featuredMechas.map((mecha) => (
        <FeaturedItem
          key={mecha._id}
          id={mecha._id}
          thumbnail={`${THUMBNAIL_URL}/${mecha.details.images[0]}`}
          title={mecha.name}
          category={mecha.category.name}
        />
      ));
    }
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
          {renderedFeaturedItems()}
        </div>
      </div>
    </section>
  );
}
