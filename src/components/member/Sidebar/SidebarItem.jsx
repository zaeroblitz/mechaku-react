import cx from "classnames";
import { Link } from "react-router-dom";

export default function SidebarItem({ icon, label, isActive, href }) {
  const sidebarItemClass = cx({
    "nav-item": true,
    "nav-active": isActive,
  });

  return (
    <div className={sidebarItemClass}>
      <Link to={href}>
        <div className="d-flex">
          <div className="icon">{icon}</div>
          <p className="label">{label}</p>
        </div>
      </Link>
    </div>
  );
}
