import React, { useRef, useEffect } from "react";
import "./navbar.css";
import {
  BrowserRouter,
  NavLink,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="" className="brand-title">
          LocalDekho
        </a>
        <div className="navbar-links menu-collapse">
          <ul className="links-list">
            <li className="nav-item">
              <NavLink
                activeClassName="is-active"
                exact={true}
                className="nav-link"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="is-active"
                exact={true}
                className="nav-link"
                to="/"
              >
                Explore Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="is-active"
                exact={true}
                className="nav-link"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="is-active"
                exact={true}
                className="nav-link"
                to="/helper/auth"
              >
                List Your Service
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="is-active"
                exact={true}
                className="nav-link"
                to="/user/auth"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
