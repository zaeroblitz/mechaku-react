import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Overview from "components/member/Overview";
import { fetchTransactionUserData } from "features/transaction/transactionSlice";

export default function OverviewPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.isLogin && !auth.token) {
      navigate("/");
    } else {
      dispatch(fetchTransactionUserData(auth.user.id));
    }
  }, [auth, navigate, dispatch]);

  return (
    <>
      <Helmet>
        <title>Mechaku Member | Overview</title>
      </Helmet>
      <Overview />
    </>
  );
}
