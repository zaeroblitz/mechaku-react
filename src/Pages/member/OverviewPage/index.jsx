import { Helmet } from "react-helmet";
import Overview from "components/member/Overview";

export default function OverviewPage() {
  return (
    <>
      <Helmet>
        <title>Mechaku Member | Overview</title>
      </Helmet>
      <Overview />
    </>
  );
}
