import React from "react";
import {
  FiTag,
  FiTruck,
  FiUsers,
  FiAward,
  FiPower,
  FiTrello,
  FiCreditCard,
  FiShoppingBag,
  FiShoppingCart,
} from "react-icons/fi";
import { FaOpencart } from "react-icons/fa";

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
            to="/admin/grades"
          />
          <SidebarItem
            icon={<FiTruck className="icon" />}
            label="Couriers"
            isActive={currentPage === "couriers"}
            to="/admin/couriers"
          />
          <SidebarItem
            icon={<FiCreditCard className="icon" />}
            label="Payments"
            isActive={currentPage === "payments"}
            to="/admin/payments"
          />
          <SidebarItem
            icon={<FiShoppingBag className="icon" />}
            label="Products"
            isActive={currentPage === "products"}
            to="/admin/products"
          />
          <SidebarItem
            icon={<FiUsers className="icon" />}
            label="Users"
            isActive={currentPage === "users"}
            to="/admin/users"
          />
          <SidebarItem
            icon={<FiShoppingCart className="icon" />}
            label="Transactions"
            isActive={currentPage === "transactions"}
            to="/admin/brands"
          />
          <SidebarItem
            icon={<FaOpencart className="icon" />}
            label="Transaction Status"
            isActive={currentPage === "grades"}
            to="/admin/grades"
          />
          <div className="d-flex">
            <div className="sidebar-member-item-icon">
              <FiPower className="icon" />
            </div>
            <div className="sidebar-member-item-label">
              <p>Logout</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
