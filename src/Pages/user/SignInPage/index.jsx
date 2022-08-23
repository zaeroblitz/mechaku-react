import React from "react";
import SignInIllustration from "components/SignInPage/Illustration";
import SignInForm from "components/SignInPage/Form";
import "./styles.css";

export default function SignInPage() {
  return (
    <div className="sign-in-page">
      <div className="row sign-in-container align-items-center">
        <SignInIllustration />
        <SignInForm />
      </div>
    </div>
  );
}
