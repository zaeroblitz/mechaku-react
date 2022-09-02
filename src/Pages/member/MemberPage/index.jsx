import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Sidebar from "components/member/Sidebar";

export default function MemberPage() {
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");
  const tokenBase64 = Cookies.get("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (tokenBase64) {
      const convertToken = atob(tokenBase64);
      const jwtToken = jwtDecode(convertToken);
      setToken(convertToken);
      setUser(jwtToken.user);
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div className="member-container w-100 h-100 d-flex">
      <Sidebar user={user} />
      <Outlet />
    </div>
  );
}
