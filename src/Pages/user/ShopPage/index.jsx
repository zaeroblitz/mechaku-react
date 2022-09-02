import { Helmet } from "react-helmet";

import Filter from "components/user/ShopPage/Filter";
import ShopList from "components/user/ShopPage/ShopList";
import Breadcrumb from "components/user/ShopPage/Breadcrumb";

export default function ShopPage() {
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
