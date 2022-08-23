import React from "react";
import logo from "assets/icons/logo.svg";
import Auth from "./Auth";
import Menu from "./Menu";
import Toogle from "./Toogle";
import "./styles.css";

export default function Navbar({ current }) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light bg-white">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} width="60" height="60" alt="logo" />
          </a>
          <Toogle />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <Menu title="Home" route="/" isActive={current === "Home"} />
              <Menu title="Shop" route="/shop" isActive={current === "Shop"} />
              <Menu
                title="Categories"
                route="/categories"
                isActive={current === "Categories"}
              />
              <Menu
                title="Discover"
                route="/discover"
                isActive={current === "Discover"}
              />
              <Menu
                title="Gunpla Tips"
                route="/workshop"
                isActive={current === "Workshop"}
              />
              <Auth />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
