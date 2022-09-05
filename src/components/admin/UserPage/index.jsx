import UserItem from "./UserItem";

export default function UsersOverview({ usersData }) {
  const renderedUsersList = () => {
    if (usersData.length !== 0) {
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

  return (
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
        <tbody>{usersData.length !== 0 && renderedUsersList()}</tbody>
      </table>
    </section>
  );
}
