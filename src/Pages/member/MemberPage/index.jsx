import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

import Sidebar from "components/member/Sidebar";

export default function MemberPage() {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.isLogin && !auth.token) {
      navigate("/");
    }
  }, [auth, navigate]);

  return (
    <div className="member-container w-100 h-100 d-flex">
      <Sidebar />
      <Outlet />
    </div>
  );
}
