import React from "react";
import cx from "classnames";

export default function SidebarItem({ icon, label, isActive, href }) {
  const sidebarItemClass = cx({
    "sidebar-member-item": true,
    "sidebar-member-active": isActive,
  });

  return (
    <div className={sidebarItemClass}>
      <a href={href} style={{ textDecoration: "none" }}>
        <div className="d-flex">
          <div className="sidebar-member-item-icon">{icon}</div>
          <div className="sidebar-member-item-label">
            <p>{label}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
