import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { FaOpencart } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
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

import SidebarItem from "./SidebarItem";
import "./styles.css";

export default function Sidebar() {
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const tokenBase64 = Cookies.get("token");
  const AVATAR_URL = "http://localhost:8000/uploads/users";

  useEffect(() => {
    if (tokenBase64) {
      const token = atob(tokenBase64);
      const jwt = jwtDecode(token);
      setUser(jwt.user);
    }
  }, [tokenBase64]);

  const onLogoutButtonClick = () => {
    Cookies.remove("token");
    navigate("/");
  };

  return (
    <aside className="sidebar-member">
      <div className="sidebar-member-container">
        {Object.keys(user).length && (
          <div className="sidebar-member-header text-center">
            <img
              src={`${AVATAR_URL}/${user.avatar}`}
              width="90"
              height="90"
              alt=""
            />
            <h4>{user.name}</h4>
            <p>{user.email}</p>
          </div>
        )}
        <div className="sidebar-member-list">
          <SidebarItem
            icon={<FiTag className="icon" />}
            label="Brands"
            isActive={path.includes("/admin/brands")}
            to="/admin/brands"
          />
          <SidebarItem
            icon={<FiTrello className="icon" />}
            label="Categories"
            isActive={path.includes("/admin/categories")}
            to="/admin/categories"
          />
          <SidebarItem
            icon={<FiAward className="icon" />}
            label="Grades"
            isActive={path.includes("/admin/grades")}
            to="/admin/grades"
          />
          <SidebarItem
            icon={<FiTruck className="icon" />}
            label="Couriers"
            isActive={path.includes("/admin/couriers")}
            to="/admin/couriers"
          />
          <SidebarItem
            icon={<FiCreditCard className="icon" />}
            label="Payments"
            isActive={path.includes("/admin/payments")}
            to="/admin/payments"
          />
          <SidebarItem
            icon={<FiShoppingBag className="icon" />}
            label="Products"
            isActive={path.includes("/admin/products")}
            to="/admin/products"
          />
          <SidebarItem
            icon={<FiUsers className="icon" />}
            label="Users"
            isActive={path.includes("/admin/users")}
            to="/admin/users"
          />
          <SidebarItem
            icon={<FiShoppingCart className="icon" />}
            label="Transactions"
            isActive={path.includes("/admin/transactions")}
            to="/admin/brands"
          />
          <SidebarItem
            icon={<FaOpencart className="icon" />}
            label="Transaction Status"
            isActive={path.includes("/admin/transaction-status")}
            to="/admin/transaction-status"
          />
          <div className="d-flex" onClick={onLogoutButtonClick}>
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
