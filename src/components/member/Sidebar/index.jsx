import { useLocation } from "react-router-dom";
import { RiShoppingBag3Line } from "react-icons/ri";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { TbCreditCard, TbLayoutGrid } from "react-icons/tb";
import { FiMessageCircle, FiPower, FiSettings } from "react-icons/fi";

import SampleAvatar from "../../../assets/images/pic.png";
import SidebarItem from "./SidebarItem";
import "./styles.scss";

export default function Sidebar({ user }) {
  const location = useLocation();
  const path = location.pathname;
  const AVATAR_URL = "http://localhost:8000/uploads/users";

  return (
    <aside className="sidebar-member">
      <div className="wrapper">
        <div className="header text-center">
          {Object.keys(user).length && (
            <>
              {user.avatar !== "" ? (
                <img
                  src={`${AVATAR_URL}/${user.avatar}`}
                  width="90"
                  height="90"
                  alt=""
                />
              ) : (
                <img src={SampleAvatar} width="90" height="90" alt="" />
              )}

              <h4>{user.name}</h4>
              <p>{user.email}</p>
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
            isActive={path === "/member/transactions"}
            href="transactions"
          />
          <SidebarItem
            icon={<FiMessageCircle className="icon" />}
            label="Message"
            isActive={path === "/member/message"}
            href="messages"
          />
          <SidebarItem
            icon={<TbCreditCard className="icon" />}
            label="Card"
            isActive={path === "/member/card"}
            href="cards"
          />
          <SidebarItem
            icon={<HiOutlineBadgeCheck className="icon" />}
            label="Rewards"
            isActive={path === "/member/rewards"}
            href="rewards"
          />
          <SidebarItem
            icon={<FiSettings className="icon" />}
            label="Settings"
            isActive={path === "/member/settings"}
            href="settings"
          />
          <div className="nav-item">
            <div className="d-flex">
              <div className="icon">
                <FiPower />
              </div>
              <p className="label">Logout</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
