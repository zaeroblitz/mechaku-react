import React from "react";
import {
  FiTag,
  FiUsers,
  FiAward,
  FiPower,
  FiTrello,
  FiCreditCard,
  FiShoppingBag,
} from "react-icons/fi";

import SidebarItem from "./SidebarItem";
import SampleAvatar from "../../../assets/images/pic.png";
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
            icon={<FiTag className="icon" />}
            label="Brands"
            isActive={currentPage === "brands"}
            to="/admin/brands"
          />
          <SidebarItem
            icon={<FiTrello className="icon" />}
            label="Categories"
            isActive={currentPage === "categories"}
            to="/admin/categories"
          />
          <SidebarItem
            icon={<FiAward className="icon" />}
            label="Grades"
            isActive={currentPage === "grades"}
            to="/admin/brands"
          />
          <SidebarItem
            icon={<FiShoppingBag className="icon" />}
            label="Products"
            isActive={currentPage === "products"}
            to="/admin/brands"
          />
          <SidebarItem
            icon={<FiUsers className="icon" />}
            label="Users"
            isActive={currentPage === "users"}
            to="/admin/brands"
          />
          <SidebarItem
            icon={<FiCreditCard className="icon" />}
            label="Transactions"
            isActive={currentPage === "transactions"}
            to="/admin/brands"
          />
          <div className="logout">
            <div className="d-flex">
              <div className="sidebar-member-item-icon logout-icon">
                <FiPower className="icon" />
              </div>
              <div className="sidebar-member-item-label logout-label">
                <p>Logout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
