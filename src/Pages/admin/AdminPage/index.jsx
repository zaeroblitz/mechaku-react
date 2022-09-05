import { Outlet } from "react-router-dom";
import Sidebar from "components/admin/Sidebar";

export default function AdminPage() {
  return (
    <div className="admin-page-container w-100 h-100 d-flex">
      <Sidebar />
      <Outlet />
    </div>
  );
}
