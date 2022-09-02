import { useLocation } from "react-router-dom";
import Logo from "assets/icons/logo.svg";
import Auth from "./Auth";
import Menu from "./Menu";
import Toogle from "./Toogle";
import "./styles.scss";

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light bg-white">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={Logo} width="60" height="60" alt="Logo" />
          </a>
          <Toogle />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <Menu title="Home" route="/" isActive={path === "/"} />
              <Menu title="Shop" route="/shop" isActive={path === "/shop"} />
              <Menu
                title="Categories"
                route="/categories"
                isActive={path === "/categories"}
              />
              <Menu
                title="Discover"
                route="/discover"
                isActive={path === "/discover"}
              />
              <Menu
                title="Gunpla Tips"
                route="/workshop"
                isActive={path === "/workshop"}
              />
              <Auth />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
