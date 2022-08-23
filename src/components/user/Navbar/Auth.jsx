import React from "react";
import { Link } from "react-router-dom";

export default function Auth() {
  return (
    <Link className="btn btn-sign-in" to="sign-in">
      Sign In
    </Link>
  );
}
