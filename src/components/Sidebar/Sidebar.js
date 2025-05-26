import React from "react";
import "./Sidebar.css";
import { FiMessageSquare, FiHelpCircle, FiSettings } from "react-icons/fi";

function Sidebar({ items }) {
  return (
    <div className="sidebar">
      <h1 className="logo">
        <span className="first">Health</span>
        <span className="second">care.</span>
      </h1>
      <nav>
        <h3 className="sidebarTitle">General</h3>
        <ul className="navList">
          {items.map((item) => (
            <li
              key={item.id}
              className={`navItem ${item.active ? "active" : ""}`}
            >
              {item.icon && <span className="sidebarIcon">{item.icon}</span>}
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
        <h3 className="sidebarTitle">Tools</h3>
        <ul className="navList">
          <li className="navItem">
            <span className="sidebarIcon">
              <FiMessageSquare size={16} />
            </span>
            <span>Chat</span>
          </li>
          <li className="navItem">
            <span className="sidebarIcon">
              <FiHelpCircle size={16} />
            </span>
            <span>Support</span>
          </li>
        </ul>
      </nav>
        <div className="sidebarFooter">
          <div className="navItem">
            <span className="sidebarIcon">
              <FiSettings size={16} />
            </span>
            <span>Setting</span>
          </div>
        </div>
    </div>
  );
}

export default Sidebar;
