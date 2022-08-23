import { useEffect } from "react";
import "./App.css";
import Footer from "components/user/Footer";
import Featured from "components/user/Homepage/Featured";
import Hero from "components/user/Homepage/Hero";
import LearnMore from "components/user/Homepage/LearnMore";
import Stats from "components/user/Homepage/Stats";
import Story from "components/user/Homepage/Story";
import Navbar from "components/user/Navbar";

export default function App() {
  useEffect(() => {
    document.title = "Mechaku | Mecha Store";
  }, []);

  return (
    <>
      <Navbar current="Home" />
      <main className="container-fluid">
        <Hero />
        <LearnMore />
        <Featured />
        <Stats />
        <Story />
      </main>
      <Footer />
    </>
  );
}
