import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

export default function AdminOverviewPage() {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.user.role !== "ADMIN") {
      navigate("/");
    }
  }, [auth, navigate]);

  return (
    <>
      <Helmet>
        <title>Mechaku Admin | Overview</title>
      </Helmet>
      <h4 className="mt-5 ms-5">Admin Overview Page</h4>
    </>
  );
}
