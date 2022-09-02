import { Helmet } from "react-helmet";

import Featured from "components/user/Homepage/Featured";
import Hero from "components/user/Homepage/Hero";
import LearnMore from "components/user/Homepage/LearnMore";
import Stats from "components/user/Homepage/Stats";
import Story from "components/user/Homepage/Story";

export default function Homepage() {
  return (
    <>
      <Helmet>
        <title>Mechaku | Mecha Store</title>
      </Helmet>
      <div className="container-fluid">
        <Hero />
        <LearnMore />
        <Featured />
        <Stats />
        <Story />
      </div>
    </>
  );
}
