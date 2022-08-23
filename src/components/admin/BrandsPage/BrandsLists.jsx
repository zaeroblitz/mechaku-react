import React, { useState, useEffect, useCallback } from "react";
import { getBrands } from "apis/brands";

import BrandsItem from "./BrandsItem";

export default function BrandsLists() {
  const [brandsLists, setBrandLists] = useState([]);

  const getBrandsData = useCallback(async () => {
    const brandsData = await getBrands();

    const data = brandsData.data;
    setBrandLists(data);
  }, [getBrands]);

  useEffect(() => {
    getBrandsData();
  }, []);

  const renderedBrandsLists = () => {
    return brandsLists.map((brand, index) => (
      <BrandsItem
        key={brand._id}
        id={brand._id}
        no={index + 1}
        name={brand.name}
        thumbnail={brand.thumbnail}
      />
    ));
  };

  return (
    <div className="brands-data-wrapper">
      <table className="table table-borderless table-hover">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Thumbnail</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderedBrandsLists()}</tbody>
      </table>
    </div>
  );
}
