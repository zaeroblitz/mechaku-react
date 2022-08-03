import { useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Featured from "./components/Homepage/Featured";
import Hero from "./components/Homepage/Hero";
import LearnMore from "./components/Homepage/LearnMore";
import Stats from "./components/Homepage/Stats";
import Story from "./components/Homepage/Story";
import Navbar from "./components/Navbar";

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
