import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SettingsComponent from "components/member/SettingsPage";

export default function SettingsPage() {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.isLogin && !auth.token) {
      navigate("/");
    }
  }, [auth, navigate]);

  return (
    <>
      <Helmet>
        <title>Mechaku Member | Settings</title>
      </Helmet>
      <SettingsComponent />
    </>
  );
}
