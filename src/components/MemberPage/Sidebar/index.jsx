import React from "react";
import { FiMessageCircle, FiPower, FiSettings } from "react-icons/fi";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { RiShoppingBag3Line } from "react-icons/ri";
import { TbCreditCard, TbLayoutGrid } from "react-icons/tb";
import SampleAvatar from "../../../assets/images/pic.png";
import SidebarItem from "./SidebarItem";
import "./styles.css";

export default function Sidebar() {
  return (
    <aside className="sidebar-member col-lg-3">
      <div className="sidebar-member-container">
        <div className="sidebar-member-header text-center">
          <img src={SampleAvatar} width="90" height="90" alt="" />
          <h4>Zaero Blitz</h4>
          <p>zaeroblitz@gmail.com</p>
        </div>
        <div className="sidebar-member-list">
          <SidebarItem
            icon={<TbLayoutGrid className="icon" />}
            label="Overview"
            isActive
          />
          <SidebarItem
            icon={<RiShoppingBag3Line className="icon" />}
            label="Transactions"
          />
          <SidebarItem
            icon={<FiMessageCircle className="icon" />}
            label="Message"
          />
          <SidebarItem icon={<TbCreditCard className="icon" />} label="Card" />
          <SidebarItem
            icon={<HiOutlineBadgeCheck className="icon" />}
            label="Rewards"
          />
          <SidebarItem
            icon={<FiSettings className="icon" />}
            label="Settings"
          />
          <SidebarItem icon={<FiPower className="icon" />} label="Logout" />
        </div>
      </div>
    </aside>
  );
}
