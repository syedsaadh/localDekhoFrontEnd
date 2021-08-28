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
    route: "/user/dashboard",
    icon: "bx bx-category-alt",
  },
  {
    display_name: "Accepted Request",
    route: "/user/accepted",
    icon: "bx bx-user-pin",
  },
  {
    display_name: "Previous Services",
    route: "/user/previous",
    icon: "bx bx-user-pin",
  },
];

const UserLayout = () => {
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

export default UserLayout;
