import TableItem from "./TableItem";
import "./styles.scss";

export default function CartTable({ token, userId, cartItems }) {
  const renderedCartItems = () => {
    if (cartItems.length !== 0) {
      return cartItems.map((item) => (
        <TableItem
          key={item._id}
          itemId={item._id}
          amount={item.amount}
          name={item.product.name}
          category={item.product.category.name}
          thumbnail={item.product.details.images[0]}
          price={item.product.details.price}
          stock={item.product.details.quantity}
          token={token}
          userId={userId}
        />
      ));
    }
  };

  return (
    <table className="cart-table table table-borderless align-middle">
      <thead>
        <tr>
          <th></th>
          <th>Product</th>
          <th>Amount</th>
          <th>Price</th>
          <th className="text-center">Action</th>
        </tr>
      </thead>
      <tbody>{cartItems.length !== 0 && renderedCartItems()}</tbody>
    </table>
  );
}
