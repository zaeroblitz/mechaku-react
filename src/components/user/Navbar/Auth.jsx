import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Auth() {
  const [user, setUser] = useState({});
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const AVATAR_URL = "http://localhost:8000/uploads/users";

  useEffect(() => {
    const tokenBase64 = Cookies.get("token");

    if (tokenBase64) {
      const token = atob(tokenBase64);
      const jwt = jwtDecode(token);
      setUser(jwt.user);
      setIsLogin(true);
    }
  }, []);

  const onLogout = () => {
    Cookies.remove("token");
    setIsLogin(false);
    navigate("/");
  };

  if (isLogin) {
    return (
      <li className="nav-item dropdown">
        <div
          className="nav-link dropdown-toggle"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src={`${AVATAR_URL}/${user.avatar}`}
            width="40"
            height="40"
            className="me-2 rounded-circle"
            alt=""
          />
        </div>
        <ul className="dropdown-menu">
          {user.role === "ADMIN" && (
            <Link className="dropdown-item" to="/admin">
              Admin
            </Link>
          )}
          <Link className="dropdown-item" to="/member">
            My Dashboard
          </Link>
          <Link className="dropdown-item" to="/member/settings">
            Settings
          </Link>
          <div className="dropdown-item" onClick={onLogout}>
            Logout
          </div>
        </ul>
      </li>
    );
  } else {
    return (
      <Link className="btn btn-sign-in" to="/sign-in">
        Sign In
      </Link>
    );
  }
}
