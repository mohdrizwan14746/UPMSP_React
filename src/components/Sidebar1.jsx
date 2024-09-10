import React from "react";
import "../css/sidebar1.css";
import Header from "./Header";
import Footer from "./Footer";
import { sidebarData } from "../pages/sidebarData.js";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const Sidebar1 = ({ children }) => {
  return (
    <>
      <Header />
      <div className="d-flex">
        <div className="Sidebar1 ">
          <div className="sidebarContentContainer ">
            <div className="sidebarContainer">
              <ul className="d-flex flex-column">
                {sidebarData.map((value, key) => {
                  return (
                    <li key={key} className="d-flex my-3">
                      <span className="icon">{value.icon}</span>
                      <h5 className="title ">{value.title}</h5>
                      <Tooltip anchorSelect={value.icon} place="top">
                        {value.title}
                      </Tooltip>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="content bg-light container-fluid h-100">
          <main className="main h-100">{children}</main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sidebar1;
