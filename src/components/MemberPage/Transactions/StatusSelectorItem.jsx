import React from "react";
import cx from "classnames";

export default function StatusSelectorItem({ label, isActive }) {
  const statusSelectorClass = cx({
    "status-selector": true,
    "status-selector-active": isActive,
  });

  return (
    <div className={statusSelectorClass}>
      <p>{label}</p>
    </div>
  );
}
