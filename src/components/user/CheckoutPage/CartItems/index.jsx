import "./styles.scss";
import SampleThumbnail1 from "assets/images/featured-1.jpg";
import SampleThumbnail2 from "assets/images/featured-2.jpg";
import SampleThumbnail3 from "assets/images/featured-3.jpg";
import ProductOrderedItem from "./Item";

export default function CartItems() {
  return (
    <section className="cart-items">
      <h2 className="title">Products Ordered</h2>
      <div className="card">
        <table className="table table-borderless">
          <thead>
            <tr>
              <th>No.</th>
              <th>Product</th>
              <th>Single Price</th>
              <th>Amount</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            <ProductOrderedItem
              key={1}
              no={1}
              thumbnail={SampleThumbnail1}
              name="Product A"
              category="Gundam"
              price={100000}
              amount={5}
            />
            <ProductOrderedItem
              key={2}
              no={2}
              thumbnail={SampleThumbnail2}
              name="Product B"
              category="Zoids"
              price={200000}
              amount={3}
            />
            <ProductOrderedItem
              key={3}
              no={3}
              thumbnail={SampleThumbnail3}
              name="Product C"
              category="Gundam"
              price={500000}
              amount={2}
            />
          </tbody>
        </table>
      </div>
    </section>
  );
}
