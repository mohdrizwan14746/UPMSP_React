import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BasicLayout = ({ children }) => {
  return (
    <div className="layout">
      <Header className="header" />
      {/* <Sidebar/> */}
      <main style={{ marginTop: "6%" }} className="mainCss">
        {children}
      </main>
      <Footer className="footer" />
    </div>
  );
};

export default BasicLayout;
