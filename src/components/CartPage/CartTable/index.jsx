import React from "react";
import ThumbnailSample1 from "../../../assets/images/featured-1.jpg";
import ThumbnailSample2 from "../../../assets/images/featured-2.jpg";
import ThumbnailSample3 from "../../../assets/images/featured-3.jpg";
import ThumbnailSample4 from "../../../assets/images/featured-4.jpg";
import "./styles.css";
import TableItem from "./TableItem";

export default function CartTable() {
  return (
    <table className="cart-table table table-borderless align-middle">
      <thead>
        <tr>
          <th scope="col">Photo</th>
          <th scope="col">Product</th>
          <th scope="col">Price</th>
          <th scope="col" className="text-center">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <TableItem
          thumbnail={ThumbnailSample1}
          name="Astray Red Frame Kai"
          category="Gundam"
          price="Rp. 1.275.000"
        />
        <TableItem
          thumbnail={ThumbnailSample2}
          name="Zoids Berserk Fuhrer"
          category="Zoids"
          price="Rp. 1.125.000"
        />
        <TableItem
          thumbnail={ThumbnailSample3}
          name="Wargreymon Amplified"
          category="Digimon"
          price="Rp. 1.550.000"
        />
        <TableItem
          thumbnail={ThumbnailSample4}
          name="Victory Assault Buster"
          category="Gundam"
          price="Rp. 1.575.000"
        />
      </tbody>
    </table>
  );
}
