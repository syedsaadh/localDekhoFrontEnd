import React from "react";
import { Link } from "react-router-dom";
import "./searchbar.css";

const curr_user = {
  display_name: "Helper",
};

const Available_service = [
  {
    content: "Electrician",
  },
  {
    content: "Machanic",
  },
  {
    content: "Carpenter",
  },
  {
    content: "Tuition",
  },
  {
    content: "Food",
  },
  {
    content: "Maid",
  },
  {
    content: "Cook / Chefs",
  },
  {
    content: "Packers and Movers",
  },
];

const renderUserToggle = (user) => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image">
      {/* <img src={user.image} alt="" /> */}
    </div>
    <div className="topnav__right-user__name">{user.display_name}</div>
  </div>
);

const renderUserMenu = (item, index) => (
  <Link to="/" key={index}>
    <div className="notification-item">
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  </Link>
);

const SearchBar = () => {
  return (
    <div className="wrap">
      <div className="search">
        <div className="category__list">
          <select className="category__list-option">
            <option value="0">Category</option>
            <option value="1">Audi</option>
            <option value="2">BMW</option>
            <option value="3">Citroen</option>
            <option value="4">Ford</option>
            <option value="5">Honda</option>
            <option value="6">Jaguar</option>
            <option value="7">Land Rover</option>
            <option value="8">Mercedes</option>
            <option value="9">Mini</option>
            <option value="10">Nissan</option>
            <option value="11">Toyota</option>
            <option value="12">Volvo</option>
          </select>
        </div>
        <div className="category__list-option">
          <input
            type="text"
            className="searchTerm"
            placeholder="What are you looking for?"
          />
        </div>
        <div>
          <button type="submit" class="searchButton">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
