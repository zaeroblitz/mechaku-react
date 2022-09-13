import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import TransactionDetailComponents from "components/member/TransactionDetails";
import { fetchSelectedTransaction } from "features/transaction/selectedTransactionSlice";

export default function TransactionDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.isLogin && !auth.token) {
      navigate("/");
    } else {
      dispatch(fetchSelectedTransaction(id));
    }
  }, [auth, navigate, dispatch, id]);

  return (
    <>
      <Helmet>
        <title>Mechaku Member | Settings</title>
      </Helmet>
      <TransactionDetailComponents />
    </>
  );
}
