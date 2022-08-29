import { getAllCouriersData } from "apis/couriers";
import React, { useCallback, useEffect, useState } from "react";
import CourierItem from "./CourierItem";

export default function CourierList() {
  const [data, setData] = useState([]);

  const getCouriersData = useCallback(async () => {
    const response = await getAllCouriersData();

    setData(response.data);
  }, []);

  useEffect(() => {
    (async () => {
      getCouriersData();
    })();
  }, [getCouriersData]);

  const renderedCourierList = () => {
    if (data) {
      return data.map((courier, index) => (
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

  return (
    <div className="couriers-data-wrapper">
      <table className="table table-borderless table-hover">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Thumbnail</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{data && renderedCourierList()}</tbody>
      </table>
    </div>
  );
}
