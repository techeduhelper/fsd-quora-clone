import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="laptop:mx-56 mobile:mx-3 min-h-screen shrink-0 bottom-0 flex flex-col">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
