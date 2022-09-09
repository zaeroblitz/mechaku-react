import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { cleanedUp } from "features/auth/authSlice";

export default function Auth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const AVATAR_URL = "http://localhost:8000/uploads/users";
  const userData = useSelector((state) => state.auth);
  const cartData = useSelector((state) => state.carts);

  const onLogout = () => {
    dispatch(cleanedUp());
    navigate("/");
  };

  const showUserDropdown = () => {
    if (
      !userData.isLoading &&
      Object.keys(userData.user).length &&
      !cartData.isLoading
    ) {
      return (
        <li className="nav-item dropdown">
          <div
            className="nav-link dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={`${AVATAR_URL}/${userData.user.avatar}`}
              width="40"
              height="40"
              className="me-2 rounded-circle"
              alt=""
            />
          </div>
          <ul className="dropdown-menu">
            {userData.user.role === "ADMIN" && (
              <Link className="dropdown-item" to="/admin">
                Admin
              </Link>
            )}
            <Link className="dropdown-item" to="/member">
              My Dashboard
            </Link>
            {cartData.data.items && (
              <Link className="dropdown-item" to="/cart">
                Cart ({cartData.data.items.length})
              </Link>
            )}
            <Link className="dropdown-item" to="/member/settings">
              Settings
            </Link>
            <div className="dropdown-item" onClick={onLogout}>
              Logout
            </div>
          </ul>
        </li>
      );
    }
  };

  const showLoginButton = () => {
    if (!userData.isLogin && !userData.isLoading) {
      return (
        <Link className="btn btn-sign-in" to="/sign-in">
          Sign In
        </Link>
      );
    }
  };

  return (
    <>
      {showLoginButton()}
      {showUserDropdown()}
    </>
  );
}
