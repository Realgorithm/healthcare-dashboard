import React from "react";
import "./Header.css";
import { FiSearch, FiBell, FiPlus } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <header className="header">
      <div className="searchBar">
        <FiSearch className="searchIcon" />
        <input type="text" placeholder="Search..." />
        <FiBell className="icon" />
      </div>
      <div className="userControls">
        <div className="userProfile">
          <span className="avatar" size={28}>
            👦🏻
          </span>
        </div>
        <button className="addButton">
          <FiPlus />
        </button>
      </div>
    </header>
  );
}

export default Header;
