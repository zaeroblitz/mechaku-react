import { getAllProducts } from "apis/products";
import React, { useCallback, useEffect, useState } from "react";
import ShopItem from "./ShopItem";
import "./styles.css";

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
    <div className="col-md-9">
      <div className="shop-keyword ms-5">
        <h2>List of Mechas</h2>
      </div>
      <div className="shop-list ms-5">
        <div className="row row-cols-4 g-3">
          {products && renderedShopItems()}
        </div>
      </div>
    </div>
  );
}
