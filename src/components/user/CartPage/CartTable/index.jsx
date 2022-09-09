import { useSelector } from "react-redux";
import { GridLoader } from "react-spinners";
import TableItem from "./TableItem";
import "./styles.scss";

export default function CartTable({ onCheckItemChange, onPriceItemChange }) {
  const carts = useSelector((state) => state.carts);

  const renderedCartItems = () => {
    if (!carts.loading && carts.data) {
      const cartsData = carts.data.items;
      return cartsData.map((item) => (
        <TableItem
          key={item._id}
          itemId={item._id}
          amount={item.amount}
          name={item.product.name}
          category={item.product.category.name}
          thumbnail={item.product.details.images[0]}
          price={item.product.details.price}
          stock={item.product.details.quantity}
        />
      ));
    }
  };

  return (
    <>
      {carts.loading && (
        <div className="w-100 text-center">
          <GridLoader color="#333" />
        </div>
      )}
      {!carts.loading && carts.data && (
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
          <tbody>{renderedCartItems()}</tbody>
        </table>
      )}
    </>
  );
}
