import React from "react";
import { Link } from "react-router-dom";
import "../css/header.scss";
import logo from "../assets/banners/Blue Modern Professiona Handshake Partner Business Consulting Logo Design_20240924_225521_0000.png";

const Header = () => {
  return (
    <div className="mainheader">
      <div className="logobox">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navigations">
        <Link to={"/"}>
          <h2>Home</h2>
        </Link>
        <Link to={"/payment"}>
          <h2>Apply</h2>
        </Link>
        <Link to={"/about"}>
          <h2>About Us</h2>
        </Link>
        <Link to={"/contact"}>
          <h2>Contact Us</h2>
        </Link>
        <Link to={"/admin"}>
          <h2>Admin Login</h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
