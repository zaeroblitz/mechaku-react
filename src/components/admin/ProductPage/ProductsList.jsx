import { getAllProducts } from "apis/products";
import React, { useCallback, useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import "./styles.css";

export default function ProductsList() {
  const [products, setProducts] = useState([]);

  const getProductsData = useCallback(async () => {
    const response = await getAllProducts();

    setProducts(response.data);
  }, []);

  useEffect(() => {
    (async () => {
      getProductsData();
    })();
  }, [getProductsData]);

  const renderedProductList = () => {
    return products.map((product, index) => (
      <ProductItem
        key={product._id}
        id={product._id}
        no={index + 1}
        name={product.name}
        thumbnail={product.details.images[0]}
        category={product.category.name}
        price={product.details.price}
      />
    ));
  };

  return (
    <div className="products-data-wrapper">
      <table className="table table-borderless table-hover">
        <thead>
          <tr>
            <th>No.</th>
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderedProductList()}</tbody>
      </table>
    </div>
  );
}
