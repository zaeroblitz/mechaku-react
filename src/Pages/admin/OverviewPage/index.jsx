import Cookies from "js-cookie";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

export default function AdminOverviewPage() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Mechaku Admin | Overview";
    const tokenBase64 = Cookies.get("token");

    if (tokenBase64) {
      const token = atob(tokenBase64);

      const jwt = jwtDecode(token);
      if (jwt.user.role !== "ADMIN") {
        navigate("/");
      }
    } else {
      navigate("/");
    }
  }, [navigate]);

  return <h4>Admin Overview Page</h4>;
}
