import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../component/Footer";

import Navbar from "./Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
