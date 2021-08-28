import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import StatusCard from "../../../status-card/StatusCard";

import statusCards from "../../../../assets/JsonData/status-card-data-user.json";
import { themeActions } from "../../../../store/theme/theme-slice";

function Dashboard() {
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
    <div>
      <h2 className="page-header">Dashboard</h2>
      <div className="row">
        <div className="col-12">
          <div className="row">
            {statusCards.map((item, index) => (
              <div className="col-6" key={index}>
                <StatusCard
                  icon={item.icon}
                  count={item.count}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
