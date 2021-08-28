import React, { useEffect } from "react";

import "../../../../assets/boxicons-2.0.7/css/boxicons.min.css";
import "../../../../assets/css/grid.css";
import "../../../../assets/css/theme.css";
import "../../../../assets/css/index.css";

import "./layout.css";

import Sidebar from "../../sidebar/Sidebar";
import TopNav from "../../../topnav/TopNav";
import Routes from "./Routes";

import { BrowserRouter, Route } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { themeActions } from "../../../../store/theme/theme-slice";

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

const HelperLayout = () => {
  const themeReducer = useSelector((state) => state.theme);
  console.log(themeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light");
    console.log(themeClass);
    const colorClass = localStorage.getItem("colorMode", "theme-mode-light");

    dispatch(themeActions.SET_MODE(themeClass));

    dispatch(themeActions.SET_COLOR(colorClass));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
            <Sidebar {...props} items={sidebar_items} />
            <div className="layout__content">
              <TopNav />
              <div className="layout__content-main">
                <Routes />
              </div>
            </div>
          </div>
        )}
      />
    </BrowserRouter>
  );
};

export default HelperLayout;
