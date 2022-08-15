import React from "react";
import ProductSample1 from "../../../assets/images/featured-1.jpg";
import ProductSample2 from "../../../assets/images/featured-2.jpg";
import ProductSample3 from "../../../assets/images/featured-3.jpg";
import ProductSample4 from "../../../assets/images/featured-4.jpg";
import ProductSample5 from "../../../assets/images/featured-5.jpg";
import TransactionItem from "./TransactionItem";

export default function TransactionsTable() {
  return (
    <div className="overview-transactions">
      <h2>Latest Transactions</h2>
      <div className="overview-transactions-table">
        <table className="table table-borderless table-hover">
          <thead>
            <tr>
              <th>Product</th>
              <th>Grade</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Product Sample 1 */}
            <TransactionItem
              thumbnail={ProductSample1}
              name="Astray Red Frame Kai"
              category="Gundam"
              grade="High Grade (HG)"
              price="Rp. 290.000"
              status="Pending"
            />

            {/* Product Sample 2 */}
            <TransactionItem
              thumbnail={ProductSample2}
              name="Zoids Berserk Fuhrer"
              category="Zoids"
              grade="Perfect Grade (PG)"
              price="Rp 1.137.000"
              status="Success"
            />

            {/* Product Sample 3 */}
            <TransactionItem
              thumbnail={ProductSample3}
              name="Wargreymon Amplified"
              category="Digimon"
              grade="Master Grade (MG)"
              price="Rp 590.000"
              status="Success"
            />

            {/* Product Sample 4 */}
            <TransactionItem
              thumbnail={ProductSample4}
              name="Victory Two Assault Buster"
              category="Gundam"
              grade="High Grade (HG)"
              price="Rp 880.000"
              status="Failed"
            />

            {/* Product Sample 5 */}
            <TransactionItem
              thumbnail={ProductSample5}
              name="Epyon Ew"
              category="Gundam"
              grade="High Grade (HG)"
              price="Rp 1.290.000"
              status="Pending"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}
