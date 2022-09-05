export default function UserItem({ no, name, email, role }) {
  return (
    <tr className="align-middle">
      <td>{no}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{role}</td>
    </tr>
  );
}
