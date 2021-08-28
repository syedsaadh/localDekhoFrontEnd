import React from "react";

import { Link } from "react-router-dom";

import "./sidebar.css";

import logo from "../../../assets/images/logo2.png";
// import logo from "../../../a"

const sidebar_items = [
  {
    display_name: "Dashboard",
    route: "/helper/dashboard",
    icon: "bx bx-category-alt",
  },
  {
    display_name: "Customers",
    route: "/customers",
    icon: "bx bx-user-pin",
  },
  {
    display_name: "All Services",
    route: "/helper/allservices",
    icon: "bx bx-user-pin",
  },
  {
    display_name: "Pending Requests",
    route: "/pending",
    icon: "bx bx-notification",
  },
  {
    display_name: "Scheduled Services",
    route: "/scheduled",
    icon: "bx bx-time",
  },
  {
    display_name: "Completed Request",
    route: "/completed",
    icon: "bx bx-task",
  },
  {
    display_name: "settings",
    route: "/settings",
    icon: "bx bx-cog",
  },
];

const SidebarItem = (props) => {
  const active = props.active ? "active" : "";

  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${active}`}>
        <i className={props.icon}></i>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

const Sidebar = (props) => {
  const activeItem = sidebar_items.findIndex(
    (item) => item.route === props.location.pathname
  );

  console.log(props);
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={logo} alt="company logo" />
      </div>
      {props.items.map((item, index) => (
        <Link to={item.route} key={index}>
          <SidebarItem
            title={item.display_name}
            icon={item.icon}
            active={index === activeItem}
          />
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
