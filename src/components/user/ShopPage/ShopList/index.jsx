import { useCallback, useEffect, useState } from "react";

import { getAllProducts } from "apis/products";
import ShopItem from "./ShopItem";
import "./styles.scss";

export default function ShopList() {
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async () => {
    const response = await getAllProducts();

    setProducts(response.data);
  }, []);

  useEffect(() => {
    (async () => {
      getProducts();
    })();
  }, [getProducts]);

  const renderedShopItems = () => {
    return products.map((product) => (
      <ShopItem
        key={product._id}
        id={product._id}
        name={product.name}
        thumbnail={product.details.images[0]}
        price={product.details.price}
      />
    ));
  };

  return (
    <section className="shop-list col-md-9">
      <h2 className="title ms-5">List of Mechas</h2>
      <div className="items-container ms-5">
        <div className="row row-cols-4 g-3">
          {products && renderedShopItems()}
        </div>
      </div>
    </section>
  );
}
