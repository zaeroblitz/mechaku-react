import SignInForm from "components/user/SignInPage/Form";
import SignInIllustration from "components/user/SignInPage/Illustration";
import "./styles.scss";

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
