import { getAllUser } from "apis/user";
import React, { useCallback, useEffect, useState } from "react";
import "./styles.css";
import UserItem from "./UserItem";

export default function UserPageComponents() {
  const [users, setUsers] = useState([]);

  const getUsersData = useCallback(async () => {
    const response = await getAllUser();

    setUsers(response.data);
  }, []);

  useEffect(() => {
    (async () => {
      getUsersData();
    })();
  }, [getUsersData]);

  const renderedUsersList = () => {
    return users.map((user, index) => (
      <UserItem
        key={user._id}
        no={index + 1}
        name={user.name}
        email={user.email}
        role={user.role}
      />
    ));
  };

  return (
    <div className="users-page-container col-lg-8">
      <h2 className="title">List Users</h2>
      <div className="users-data-wrapper">
        <table className="table table-borderless table-hover">
          <thead>
            <tr className="align-middle">
              <td>No.</td>
              <td>Name</td>
              <td>Email</td>
              <td>Role</td>
            </tr>
          </thead>
          <tbody>{users.length && renderedUsersList()}</tbody>
        </table>
      </div>
    </div>
  );
}
