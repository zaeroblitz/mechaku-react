import React from "react";

export default function InputText({ label, value, placeholder, type }) {
  return (
    <div className="input-text">
      <p className="input-text-label">{label}</p>
      <input
        type={type}
        className="form-control input-text-form"
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}
