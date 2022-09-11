import GradesItem from "./GradeItem";
import { useSelector } from "react-redux";
import { GridLoader } from "react-spinners";

export default function GradesOverview() {
  const grades = useSelector((state) => state.grades);

  const showLoadingSpinner = () => {
    if (grades.loading && grades.response === "loading") {
      return (
        <div className="w-100 h-100 d-flex justify-content-center align-items-center">
          <GridLoader color="#333333" />
        </div>
      );
    }
  };

  const renderedGradeList = () => {
    if (!grades.loading && grades.data.length) {
      const gradesData = grades.data;

      return gradesData.map((grade, index) => (
        <GradesItem
          key={grade._id}
          id={grade._id}
          no={index + 1}
          name={grade.name}
          thumbnail={grade.thumbnail}
        />
      ));
    }
  };

  return (
    <>
      {showLoadingSpinner()}
      {!grades.loading && !grades.error && grades.data.length !== 0 && (
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
      )}
    </>
  );
}
