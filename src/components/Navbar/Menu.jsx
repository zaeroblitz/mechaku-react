import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";

export default function Menu({ title, isActive = false, route = "/" }) {
  const menuClass = cx({
    "nav-link": true,
    active: isActive,
  });

  return (
    <li className="nav-item">
      <Link className={menuClass} to={route}>
        {title}
      </Link>
    </li>
  );
}
