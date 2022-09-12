import ProductItem from "./ProductItem";
import { GridLoader } from "react-spinners";
import { useSelector } from "react-redux";

export default function ProductsOverview() {
  const products = useSelector((state) => state.products);

  const showProductList = () => {
    if (!products.loading && !products.error && products.products.length) {
      const productsData = products.products;

      return productsData.map((product, index) => (
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
    }
  };

  const showLoadingSpinner = () => {
    if (products.loading && products.response === "loading") {
      return (
        <div className="w-100 h-100 d-flex justify-content-center align-items-center">
          <GridLoader color="#333333" />
        </div>
      );
    }
  };

  return (
    <>
      {showLoadingSpinner()}
      {!products.loading && !products.error && products.products.length && (
        <section className="data-container">
          <table className="table table-borderless table-hover">
            <thead>
              <tr>
                <th>No.</th>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>{showProductList()}</tbody>
          </table>
        </section>
      )}
    </>
  );
}
