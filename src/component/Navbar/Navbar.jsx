import React from "react";
import "./Navbar.scss";
import { coronavirusBlue } from "../../assets";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-outer-container">
      <div className="navbar-header">
        <div className="header-content-container">
          <img src={coronavirusBlue} alt="corona_blue_img" />
          <h1>covid-19 diagnostic app</h1>
          <img src={coronavirusBlue} alt="corona_blue_img" />
        </div>
      </div>
      <div className="navbar-navigation">
        <ul className="nav-content-container">
          <li>
            <NavLink to="#" className="nav-btn">
              Diagnosis Mandiri
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className="nav-btn">
              Himbauan Prokes
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
