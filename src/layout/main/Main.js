import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <ToastContainer
        position="top-center"
        autoClose={500}
        className="bg-green-100 border-t border-b border-green-500 text-green-700 px-4 py-3 w-5"
      />
      <Outlet />
    </div>
  );
};

export default Main;
