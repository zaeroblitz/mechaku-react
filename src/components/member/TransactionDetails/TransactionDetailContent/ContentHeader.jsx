import { useSelector } from "react-redux";

export default function ContentHeader() {
  const transaction = useSelector((state) => state.selectedTransaction);
  const PRODUCT_THUMBNAIL_URL = "http://localhost:8000/uploads/products";

  return (
    <>
      {!transaction.loading &&
        Object.keys(transaction.data).length !== 0 &&
        transaction.data.products.map((product) => (
          <div
            className="content-header d-flex align-items-center justify-content-between mb-3"
            key={product._id}
          >
            <div className="content-header-product d-flex align-items-center">
              <img
                className="product-thumbnail"
                src={`${PRODUCT_THUMBNAIL_URL}/${product.details.images[0]}`}
                width="120"
                height="120"
                alt=""
              />
              <div>
                <h4 className="product-name">{product.name}</h4>
                <p className="product-category">
                  Category: {product.category.name}
                </p>
                <p className="product-grade">Grade: {product.grade.name}</p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
