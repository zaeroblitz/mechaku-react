import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";

import Filter from "components/user/ShopPage/Filter";
import ShopList from "components/user/ShopPage/ShopList";
import Breadcrumb from "components/user/ShopPage/Breadcrumb";
import { fetchAllProducts } from "features/product/productSlice";

export default function ShopPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Mechaku | Shop</title>
      </Helmet>
      <Breadcrumb />
      <div className="container-fluid row justify-content-between my-5">
        <Filter />
        <ShopList />
      </div>
    </>
  );
}
