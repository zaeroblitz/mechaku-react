import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SettingsComponent from "components/member/SettingsPage";

export default function SettingsPage() {
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");
  const tokenBase64 = Cookies.get("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (tokenBase64) {
      const convertToken = atob(tokenBase64);
      const jwtToken = jwtDecode(convertToken);
      setToken(convertToken);
      setUser(jwtToken.user);
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Mechaku Member | Settings</title>
      </Helmet>
      <SettingsComponent user={user} />
    </>
  );
}
