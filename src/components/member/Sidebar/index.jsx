import { TbLayoutGrid } from "react-icons/tb";
import { AiOutlineShop } from "react-icons/ai";
import { RiShoppingBag3Line } from "react-icons/ri";
import { FiPower, FiSettings } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import SidebarItem from "./SidebarItem";
import { cleanedUp } from "features/auth/authSlice";
import SampleAvatar from "../../../assets/images/pic.png";
import "./styles.scss";

export default function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const AVATAR_URL = "http://localhost:8000/uploads/users";
  const auth = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(cleanedUp());
    navigate("/");
  };

  return (
    <aside className="sidebar-member">
      <div className="wrapper">
        <div className="header text-center">
          {Object.keys(auth.user).length && (
            <>
              {auth.user.avatar !== "" ? (
                <img
                  src={`${AVATAR_URL}/${auth.user.avatar}`}
                  width="90"
                  height="90"
                  alt=""
                />
              ) : (
                <img src={SampleAvatar} width="90" height="90" alt="" />
              )}

              <h4>{auth.user.name}</h4>
              <p>{auth.user.email}</p>
            </>
          )}
        </div>
        <div className="nav-list">
          <SidebarItem
            icon={<TbLayoutGrid className="icon" />}
            label="Overview"
            isActive={path === "/member"}
            href="/member"
          />
          <SidebarItem
            icon={<RiShoppingBag3Line className="icon" />}
            label="Transactions"
            isActive={path.includes("/member/transactions")}
            href="transactions"
          />
          <SidebarItem
            icon={<FiSettings className="icon" />}
            label="Settings"
            isActive={path === "/member/settings"}
            href="settings"
          />
          <SidebarItem
            icon={<AiOutlineShop className="icon" />}
            label="Back to Shop"
            href="/"
          />
          <div className="nav-item nav-logout" onClick={handleLogout}>
            <div className="d-flex">
              <FiPower className="icon" />
              <p className="label">Logout</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
