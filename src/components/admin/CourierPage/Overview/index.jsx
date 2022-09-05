import CourierItem from "./CourierItem";

export default function CouriersOverview({ couriersData }) {
  const renderedCourierList = () => {
    return couriersData.map((courier, index) => (
      <CourierItem
        key={courier._id}
        id={courier._id}
        no={index + 1}
        name={courier.name}
        thumbnail={courier.thumbnail}
      />
    ));
  };

  return (
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
        <tbody>{renderedCourierList()}</tbody>
      </table>
    </section>
  );
}
