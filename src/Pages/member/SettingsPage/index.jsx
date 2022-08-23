import React from "react";
import SettingsComponent from "components/MemberPage/SettingsPage";
import Sidebar from "components/MemberPage/Sidebar";
import "./styles.css";

export default function SettingsPage() {
  return (
    <div className="member-settings w-100 h-100 d-flex">
      <Sidebar currentPage="settings" />
      <SettingsComponent />
    </div>
  );
}
