import React from "react";
import SignInIllustration from "components/user/SignInPage/Illustration";
import SignInForm from "components/user/SignInPage/Form";
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
