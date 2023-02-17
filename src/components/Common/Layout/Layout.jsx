import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="App-header">
      <Header />
      <section className="displayFlex justifyContentSpaceBetween width100vw">
        <Navbar />
        <div className="flexGrow1">{children}</div>
      </section>
    </div>
  );
};

export default Layout;
