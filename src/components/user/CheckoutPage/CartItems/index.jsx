import { useSelector } from "react-redux";
import ProductOrderedItem from "./Item";
import "./styles.scss";

export default function CartItems() {
  const selectedCarts = useSelector((state) => state.selectedCart.data);
  const PRODUCT_THUMBAIL_URL =
    "https://mechaku-server.zaerodev.my.id/uploads/products";

  const showProductOrderedItem = () => {
    if (selectedCarts.length) {
      return selectedCarts.map((item, index) => (
        <ProductOrderedItem
          key={item.itemId}
          no={index + 1}
          thumbnail={`${PRODUCT_THUMBAIL_URL}/${item.thumbnail}`}
          name={item.name}
          category={item.category}
          price={item.price}
          amount={item.amount}
        />
      ));
    } else {
      return (
        <tr>
          <td colSpan={5} className="text-center">
            No Products Ordered
          </td>
        </tr>
      );
    }
  };

  return (
    <section className="cart-items">
      <h2 className="title">Products Ordered</h2>
      <div className="card">
        <table className="table table-borderless">
          <thead>
            <tr>
              <th>No.</th>
              <th>Product</th>
              <th className="text-center">Single Price</th>
              <th className="text-center">Amount</th>
              <th className="text-center">Total Price</th>
            </tr>
          </thead>
          <tbody>{showProductOrderedItem()}</tbody>
        </table>
      </div>
    </section>
  );
}
