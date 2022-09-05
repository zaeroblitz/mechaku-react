import GradesItem from "./GradeItem";

export default function GradesOverview({ gradesData }) {
  const renderedGradeList = () => {
    return gradesData.map((grade, index) => (
      <GradesItem
        key={grade._id}
        id={grade._id}
        no={index + 1}
        name={grade.name}
        thumbnail={grade.thumbnail}
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
        <tbody>{renderedGradeList()}</tbody>
      </table>
    </section>
  );
}
