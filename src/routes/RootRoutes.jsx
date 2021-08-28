import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from 'pages/Cart/Cart'
// import ForgetPassword from 'pages/forgetpassword/ForgetPassword'
// import Home from 'pages/home/Home'
// import CardsDemo from 'pages/ProductDetail/CardsDemo'
import Login from "../screens/login";
import LandingPage from "../screens/landingPage/LandingPage";
import HelperLayout from "../components/Dashboard/helper/pages/Layout";
import UserLayout from "../components/Dashboard/user/pages/Layout";
// import Dashboard from "../pages/Dashboard";
// import AllServices from "../pages/AllServices";
import AllServices from "../components/Dashboard/helper/pages/AllServices";
// import {Dashboard as HelperDashboard} from "../components/Dashboard/helper/pages/Dashboard";
// import Dashboard from "../components/Dashboard/user/pages/Dashboard";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage}></Route>
        <Route path="/user/auth" component={Login}></Route>
        <Route path="/helper/auth" component={Login}></Route>

        <Route path="/helper/dashboard" component={HelperLayout} />
        <Route path="/helper/allservices" component={AllServices} />

        <Route path="/user/dashboard" component={UserLayout}></Route>
      </Switch>
    </Router>
  );
};

export default Routes;
