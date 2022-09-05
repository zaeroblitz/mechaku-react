import ProductItem from "./ProductItem";

export default function ProductsOverview({ productsData }) {
  const renderedProductList = () => {
    if (productsData.length !== 0) {
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

  return (
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
        <tbody>{productsData.length !== 0 && renderedProductList()}</tbody>
      </table>
    </section>
  );
}
