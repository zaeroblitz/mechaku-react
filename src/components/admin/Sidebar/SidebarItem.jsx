import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";

export default function SidebarItem({ icon, label, isActive, to }) {
  const sidebarItemClass = cx({
    "sidebar-member-item": true,
    "sidebar-member-active": isActive,
  });

  return (
    <div className={sidebarItemClass}>
      <Link to={to} style={{ textDecoration: "none" }}>
        <div className="d-flex">
          <div className="sidebar-member-item-icon">{icon}</div>
          <div className="sidebar-member-item-label">
            <p>{label}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
