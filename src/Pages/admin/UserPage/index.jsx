import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "components/admin/styles.scss";
import UsersOverview from "components/admin/UserPage";
import { fetchUsers } from "features/user/userSlice";

export default function AdminProductPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.user.role !== "ADMIN") {
      navigate("/");
    } else {
      dispatch(fetchUsers());
    }
  }, [auth, navigate, dispatch]);

  return (
    <>
      <Helmet>
        <title>Mechaku Admin | Users</title>
      </Helmet>
      <main className="main-container col-lg-8">
        <h2 className="title">Users</h2>
        <UsersOverview />
      </main>
    </>
  );
}
