import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

import "components/admin/styles.scss";
import { getAllUser } from "apis/user";
import UsersOverview from "components/admin/UserPage";

export default function AdminProductPage() {
  const [usersData, setUsersData] = useState([]);
  const navigate = useNavigate();
  const tokenBase64 = Cookies.get("token");

  useEffect(() => {
    if (tokenBase64) {
      const token = atob(tokenBase64);
      const jwt = jwtDecode(token);

      if (jwt.user.role !== "ADMIN") {
        navigate("/");
      }
    } else {
      navigate("/");
    }
  }, [tokenBase64, navigate]);

  const getUsersData = useCallback(async () => {
    const response = await getAllUser();

    setUsersData(response.data);
  }, []);

  useEffect(() => {
    getUsersData();
  }, [getUsersData]);
  return (
    <>
      <Helmet>
        <title>Mechaku Admin | Users</title>
      </Helmet>
      <main className="main-container col-lg-8">
        <h2 className="title">Users</h2>
        <UsersOverview usersData={usersData} />
      </main>
    </>
  );
}
