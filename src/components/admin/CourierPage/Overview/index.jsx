import CourierItem from "./CourierItem";
import { useSelector } from "react-redux";
import { GridLoader } from "react-spinners";

export default function CouriersOverview() {
  const couriers = useSelector((state) => state.couriers);

  const showCourierList = () => {
    if (!couriers.loading && couriers.data.length) {
      const couriersData = couriers.data;
      return couriersData.map((courier, index) => (
        <CourierItem
          key={courier._id}
          id={courier._id}
          no={index + 1}
          name={courier.name}
          thumbnail={courier.thumbnail}
        />
      ));
    }
  };

  const showLoadingSpinner = () => {
    if (couriers.loading && couriers.response === "loading") {
      return (
        <div className="w-100 h-100 d-flex justify-content-center align-items-center">
          <GridLoader color="#333333" />
        </div>
      );
    }
  };

  return (
    <>
      {showLoadingSpinner()}
      {!couriers.loading && couriers.data.length && (
        <section className="data-container">
          <table className="table table-borderless table-hover">
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Thumbnail</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>{showCourierList()}</tbody>
          </table>
        </section>
      )}
    </>
  );
}
