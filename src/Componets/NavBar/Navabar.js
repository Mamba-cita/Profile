import React from "react";
import "./style.scss";
import { SidebarData } from "./SidebarData";

export default function Navbar() {
  return (
    <>
      <div className="Sidebar">
      <span className="profile_name"> <h1>Edwin John</h1> </span>
        <div className="Sidebar__logo">
     
            <img src="./eedd.png" alt="logo" className="image_logo"/>
        </div>
        <ul className="Side_list">
          {SidebarData.map((item, index) => {
            return (
              <li
              id={window.location.pathname === item.link ? "active" : ""}
                key={index} className="Sidebar__item"
                onClick={() => {
                  window.location.pathname = item.link;
                }}
              >
                {""}
                <div id="icon">{item.icon}</div>
                {""}
                <div id="tittle">{item.title}</div>
                {""}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
