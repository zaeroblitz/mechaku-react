import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "components/user/Footer";
import Navbar from "components/user/Navbar";
import "./App.css";

export default function App() {
  useEffect(() => {
    document.title = "Mechaku | Mecha Store";
  }, []);

  return (
    <>
      <Navbar page="Home" />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
