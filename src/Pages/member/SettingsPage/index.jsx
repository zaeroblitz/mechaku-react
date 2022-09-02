import { Helmet } from "react-helmet";
import SettingsComponent from "components/member/SettingsPage";

export default function SettingsPage() {
  return (
    <>
      <Helmet>
        <title>Mechaku Member | Settings</title>
      </Helmet>
      <SettingsComponent />
    </>
  );
}
