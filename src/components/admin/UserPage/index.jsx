import UserItem from "./UserItem";
import { useSelector } from "react-redux";
import { usersSelector } from "features/user/userSlice";
import { GridLoader } from "react-spinners";

export default function UsersOverview() {
  const users = useSelector((state) => state.user);
  const usersData = useSelector(usersSelector.selectAll);

  const showUsersList = () => {
    if (!users.loading && usersData.length) {
      return usersData.map((user, index) => (
        <UserItem
          key={user._id}
          no={index + 1}
          name={user.name}
          email={user.email}
          role={user.role}
        />
      ));
    }
  };

  const showLoadingSpinner = () => {
    if (users.loading) {
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
      {!users.loading && usersData.length && (
        <section className="data-container">
          <table className="table table-borderless table-hover">
            <thead>
              <tr className="align-middle">
                <td>No.</td>
                <td>Name</td>
                <td>Email</td>
                <td>Role</td>
              </tr>
            </thead>
            <tbody>{showUsersList()}</tbody>
          </table>
        </section>
      )}
    </>
  );
}
