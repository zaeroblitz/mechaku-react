import SignInIllustrationImage from "assets/images/sign_in_illustration.jpg";

export default function SignInIllustration() {
  return (
    <div className="col-lg-6 d-flex justify-content-center">
      <img
        src={SignInIllustrationImage}
        className="img-fluid sign-in-illustration"
        alt=""
      />
    </div>
  );
}
