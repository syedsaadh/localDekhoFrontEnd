import React, { Component } from "react";
import { Menu } from "antd";
class RightMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="explore">
          <a href="">Explore Services</a>
        </Menu.Item>
        <Menu.Item key="about">
          <a href="">About</a>
        </Menu.Item>
        <Menu.Item key="list">
          <a href="/helper/auth">List Your Service</a>
        </Menu.Item>
        <Menu.Item key="login">
          <a href="/user/auth">Login</a>
        </Menu.Item>
      </Menu>
    );
  }
}
export default RightMenu;
