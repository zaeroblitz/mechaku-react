import { getAllGrades } from "apis/grades";
import React, { useCallback, useEffect, useState } from "react";
import GradesItem from "./GradesItem";

export default function GradesList() {
  const [data, setData] = useState([]);

  const getGradesData = useCallback(async () => {
    const response = await getAllGrades();

    setData(response.data);
  }, [getAllGrades]);

  useEffect(() => {
    getGradesData();
  }, []);

  console.log(data);

  const renderedGradeList = () => {
    return data.map((grade, index) => (
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
    <div className="grades-data-wrapper">
      <table className="table table-borderless table-hover">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Thumbnail</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderedGradeList()}</tbody>
      </table>
    </div>
  );
}
