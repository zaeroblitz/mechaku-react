import { useSelector } from "react-redux";
import GridLoader from "react-spinners/GridLoader";

import ShopItem from "./ShopItem";
import "./styles.scss";

export default function ShopList() {
  const product = useSelector((state) => state.products);

  const showLoading = () => {
    if (product.loading) {
      return (
        <div className="w-100 mt-4 text-center">
          <GridLoader color="#333" />
        </div>
      );
    }
  };

  const showShopItems = () => {
    if (!product.loading && product.products.length) {
      const products = product.products;
      return products.map((product) => (
        <ShopItem
          key={product._id}
          id={product._id}
          name={product.name}
          thumbnail={product.details.images[0]}
          price={product.details.price}
        />
      ));
    }
  };

  return (
    <section className="shop-list col-md-9">
      <h2 className="title ms-5">List of Mechas</h2>
      <div className="items-container ms-5">
        <div className="row row-cols-4 g-3">
          {showLoading()}
          {showShopItems()}
        </div>
      </div>
    </section>
  );
}
