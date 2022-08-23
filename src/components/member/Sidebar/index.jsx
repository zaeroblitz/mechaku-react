import React from "react";
import { FiMessageCircle, FiPower, FiSettings } from "react-icons/fi";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { RiShoppingBag3Line } from "react-icons/ri";
import { TbCreditCard, TbLayoutGrid } from "react-icons/tb";
import SampleAvatar from "../../../assets/images/pic.png";
import SidebarItem from "./SidebarItem";
import "./styles.css";

export default function Sidebar({ currentPage }) {
  return (
    <aside className="sidebar-member">
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
            isActive={currentPage === "overview"}
            href="/member"
          />
          <SidebarItem
            icon={<RiShoppingBag3Line className="icon" />}
            label="Transactions"
            isActive={currentPage === "transactions"}
            href="transactions"
          />
          <SidebarItem
            icon={<FiMessageCircle className="icon" />}
            label="Message"
            isActive={currentPage === "message"}
            href="message"
          />
          <SidebarItem
            icon={<TbCreditCard className="icon" />}
            label="Card"
            isActive={currentPage === "card"}
            href="transactions"
          />
          <SidebarItem
            icon={<HiOutlineBadgeCheck className="icon" />}
            label="Rewards"
            isActive={currentPage === "rewards"}
            href="rewards"
          />
          <SidebarItem
            icon={<FiSettings className="icon" />}
            label="Settings"
            isActive={currentPage === "settings"}
            href="settings"
          />
          <SidebarItem icon={<FiPower className="icon" />} label="Logout" />
        </div>
      </div>
    </aside>
  );
}
